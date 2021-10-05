import React from "react";
import { Link } from "react-router-dom"
import "./log.css"
export class Login extends React.Component {
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
          <h2 className="header">Login</h2>
          <div className="content">
            <div className="image">
              {/* <img src={loginImg} /> */}
            </div>
            <div className="form-container sign-in-container">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="footer">
            <button type="button" className="btn">
              <Link to="/blogges" >Login</Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}
