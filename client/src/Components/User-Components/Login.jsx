import { Component } from 'react';
import Input from '../Main-Components/Input';
import '../../App.css';
import { Link } from 'react-router-dom';
class Login extends Component {
  render() {
    const { handleLoginInputChange, handleSubmit, isLogged } = this.props;
    return isLogged ? (
      <div className="login-message-container">
        <p className="login-message">you are logged in</p>
        <Link to="/market">Add Product</Link>
      </div>
    ) : (
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          <div className="login-btn-container">
            <input type="submit" className="btn" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
