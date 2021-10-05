import React from "react";
import { Link } from "react-router-dom"
import "./log.css"
export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="heading">
          <h2>Codingmart Task</h2>
        </div>
        <div className="base-container" ref={this.props.containerRef}>
          <h2 className="header">Register</h2>

          <h4 className="header">Blogging Application - MERN Stack</h4>

          <div className="content">
            <div className="image">
              {/* <img src={loginImg} /> */}
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email      .</label>
                <input type="text" name="email" placeholder="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password" />
              </div>
            </div>
            <br/>

            <br/>

         
          <div className="footer">
            <button type="button" className="btn" id="signUp">
              <Link to="/login">Register</Link>
            </button>
          </div>
          </div>
        </div>
      </>
    );
  }
}
