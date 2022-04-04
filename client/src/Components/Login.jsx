import { Component } from "react";
import Input from "./Input";
import "./Login.css";
class Login extends Component {
  render() {
    const { handleLoginInputChange, handleSubmit, isLogged } = this.props;
    return isLogged ? (
      <h1>you are logged in</h1>
    ) : (
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="form-group">
            <Input
              className="form-control"
              id="name"
              type="text"
              placeholder="Enter your name ..."
              label="name"
              handleChange={handleLoginInputChange}
            />
          </div>
          <div className="form-group">
            <Input
              className="form-control"
              id="password"
              type="password"
              placeholder="your password ..."
              label="password"
              handleChange={handleLoginInputChange}
            />
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
