import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';
import Auth from './Auth.jsx';
import { Login } from "./components/login/login";
import { Register } from "./components/login/register";
import Home from "./components/home.js"


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="App">

      <Router>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blogges" exact>
            <Container maxWidth="lg">
              <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Codingmart Task - Blog App</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
              </AppBar>
              <Grow in>
                <Container>
                  <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                      <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                  </Grid>
                </Container>
              </Grow>
            </Container>
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
};

export default App;
