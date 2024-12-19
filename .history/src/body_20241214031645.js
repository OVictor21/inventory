import React from 'react';

const Body = () => {
  return (
    <div className="login">
         
         <form >
        <div class="sign-in position-relative border border-5 rounded-5">
        <div class="mb-3">
            <p class="text position-absolute">Sign-in</p>
            <div class="text-wrapper-8 position-absolute">Welcome!</div>
          
          <label for="exampleInputEmail1" class="form-label email position-absolute"><span class="email-text"> Email Address</span></label>
          <input type="email" class="form-control email-in position-absolute" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="input your email address"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label pass position-absolute"><span class="pass-text">Password</span> </label>
          <input type="password" class="form-control pass-in position-absolute" id="exampleInputPassword1"/>
          <a href="/forgotpassword" class="text-wrapper-7 position-absolute">Forget Password?</a>
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input position-absolute" id="exampleCheck1"/>
            <label class="form-check-label position-absolute" for="exampleCheck1">Remember me</label>
          </div>
        <button type="submit" class="btn sign-btn position-absolute border-white border-5 rounded-3">Sign In</button>
        <p  class="acct position-absolute">Don't have an account?</p> <a href="/createacct" class="acct-1 position-absolute">Create an account</a>

      
        </div>
 
   
    </form>
      
    </div>
  );
};

export default Body;
