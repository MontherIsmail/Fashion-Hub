import { Component } from "react";
import Input from "./Input";

class Login extends Component {
  render() {
    const { handleLoginInputChange, handleSubmit, isLogged } = this.props;
    return isLogged ? (
      <h1>you are loged in</h1>
    ) : (
      <form onSubmit={handleSubmit}>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name ..."
          label="name"
          handleChange={handleLoginInputChange}
        />
        <br />

        <Input
          id="password"
          type="password"
          placeholder="your password ..."
          label="password"
          handleChange={handleLoginInputChange}
        />
        <br />
        <button>Login</button>
      </form>
    );
  }
}

export default Login;
