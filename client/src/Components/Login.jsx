const Login = ({ handleChange, handleSubmit, loged }) => {
  return loged ? (
    <h1>you are loged in</h1>
  ) : (
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
};

export default Login;
