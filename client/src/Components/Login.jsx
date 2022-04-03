import { Component } from "react";

class Login extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            type="text"
            placeholder="Enter your name ..."
            id="name"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          password
          <input
            type="password"
            placeholder="your password ..."
            id="password"
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
    );
  }
}

export default Login;
