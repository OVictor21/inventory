import React from 'react';

const Body = () => {
  return (
    <div className="login">
         
         <form >
        <div className="sign-in position-relative border border-5 rounded-5">
        <div className="mb-3">
            <p className="text position-absolute">Sign-in</p>
            <div className="text-wrapper-8 position-absolute">Welcome!</div>
          
          <label for="exampleInputEmail1" className="form-label email position-absolute"><span className="email-text"> Email Address</span></label>
          <input type="email" className="form-control email-in position-absolute" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="input your email address"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label pass position-absolute"><span className="pass-text">Password</span> </label>
          <input type="password" className="form-control pass-in position-absolute" id="exampleInputPassword1"/>
          <a href="/forgotpassword" className="text-wrapper-7 position-absolute">Forget Password?</a>
        </div>

        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input position-absolute" id="exampleCheck1"/>
            <label className="form-check-label position-absolute" for="exampleCheck1">Remember me</label>
          </div>
        <button type="submit" className="btn sign-btn position-absolute border-white border-5 rounded-3 p-3 text-white fw-bold">Sign In</button>
        <p  className="acct position-absolute">Don't have an account?</p> <a href="/createacct" className="acct-1 position-absolute">Create an account</a>

      
        </div>
 
   
    </form>

    <footer className="footer-body text-white p-3 justify-content-start mb-5 d-flex"> d-flex align-items-center p-3 justify-content-start mt-5
      <div className="container">
          <div className="text-center">
            <p>&copy; 2024 BestworthJvp. All rights reserved.</p>
        </div>
      </div>
    </footer>
      
    </div>
  );
};

export default Body;
