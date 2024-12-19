

const Login = () => {

  return (
<div className="login">
  <div className="nav-body border">
    <form>
      <div className="sign-in">
        <div className="mb-3">
          <p className="text">Sign-in</p>
          <div className="text-wrapper-8">Welcome!</div>

          <label for="exampleInputEmail1" className="form-label email">
            <span className="email-text">Email Address</span>
          </label>
          <input type="email" className="form-control email-in" id="exampleInputEmail1" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label pass">
            <span className="pass-text">Password</span>
          </label>
          <input type="password" className="form-control pass-in" id="exampleInputPassword1" />
          <a href="/forgotpassword" className="text-wrapper-7">Forget Password?</a>
        </div>

        <button type="submit" className="btn sign-btn rounded-3 text-white fw-bold">Sign In</button>
        <p className="acct">Don't have an account?</p>
        <a href="/createacct" className="acct-1">Create an account</a>
      </div>
    </form>
  </div>

  <footer className="footer-body text-white p-3">
    <div className="container">
      <div className="text-center">
        <p>&copy; 2024 BestworthJvp. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>

  );
};

export default Login;
