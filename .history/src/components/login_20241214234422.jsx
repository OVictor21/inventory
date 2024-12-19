

const Login = () => {

  return (
    <div className="login d-flex flex-column min-vh-100">

    <div className=" nav-body border flex-grow-1"></div>


         <form >
        <div className="sign-in position-relative ">
        <div className="mb-3">
            <p className="text position-absolute">Sign-in</p>
            <div className="text-wrapper-8 position-absolute">Welcome!</div>
          
          <label for="exampleInputEmail1" className="form-label email position-absolute"><span className="email-text"> Email Address</span></label>
          <input type="email" className="form-control email-in position-absolute" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label pass position-absolute"><span className="pass-text">Password</span> </label>
          <input type="password" className="form-control pass-in position-absolute" id="exampleInputPassword1"/>
          <a href="/forgotpassword" className="text-wrapper-7 position-absolute">Forget Password?</a>
        </div>

 
        <button type="submit" className="btn sign-btn position-absolute rounded-3 text-white fw-bold">Sign In</button>
        <p  className="acct position-absolute">Don't have an account?</p> <a href="/createacct" className="acct-1 position-absolute">Create an account</a>

      
        </div>
    </form>
  

const Login = () => {

return (
  <div className="login d-flex flex-column min-vh-100">

  <div className=" nav-body border flex-grow-1"></div>


       <form >
      <div className="sign-in position-relative ">
      <div className="mb-3">
          <p className="text position-absolute">Sign-in</p>
          <div className="text-wrapper-8 position-absolute">Welcome!</div>
        
        <label for="exampleInputEmail1" className="form-label email position-absolute"><span className="email-text"> Email Address</span></label>
        <input type="email" className="form-control email-in position-absolute" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label pass position-absolute"><span className="pass-text">Password</span> </label>
        <input type="password" className="form-control pass-in position-absolute" id="exampleInputPassword1"/>
        <a href="/forgotpassword" className="text-wrapper-7 position-absolute">Forget Password?</a>
      </div>


      <button type="submit" className="btn sign-btn position-absolute rounded-3 text-white fw-bold">Sign In</button>
      <p  className="acct position-absolute">Don't have an account?</p> <a href="/createacct" className="acct-1 position-absolute">Create an account</a>

    
      </div>
  </form>


  </div>
);
};

export default Login;


CSS


.nav-body {
width: 35vw;
height: 65vw;
background-color: #D3D3D3;

}
/* .background-image {
background-image: url('/public/back.png');
background-size: cover;       
background-repeat: no-repeat; 
background-position: center;  
min-height: 100vh;          
color: white;                 
} */

.sign-in{
width: 50vw;
height: 65vw;
left: 45vw;
top: -65vw;
/* overflow: hidden; */
}


.text{
top: 5vw;
left: 6vw;
background: linear-gradient(180deg, rgb(51, 85, 136) 13.5%, rgb(206, 208, 214) 100%);
-webkit-background-clip: text !important;
background-clip: text;
-webkit-text-fill-color: transparent;
text-fill-color: transparent;
font-family: "Montserrat-Bold", Helvetica;
font-weight: 700;
color: transparent;
font-size: 4vw;
letter-spacing: 0;
line-height: normal;
}



.text-wrapper-8 {
background: linear-gradient(180deg, rgb(51, 85, 136) 13.5%, rgb(206, 208, 214) 100%);
-webkit-background-clip: text !important;
background-clip: text;
-webkit-text-fill-color: transparent;
text-fill-color: transparent;
font-family: "Montserrat-Bold", Helvetica;
font-weight: 600;
color: transparent;
font-size: 2vw;
letter-spacing: 0;
line-height: normal;
top: 13vw;
left: 6vw;
}

.email-text{
font-size: 1.2vw;

}

.email{
top: 17vw;
left: 6vw;
}

.email-in{
top: 23vw;
left: 6vw;
width: 80%;
max-width: 80%;
height: 5%;
}

.pass{
top: 27vw;
left: 6vw;
}

.pass-in{
top: 33vw;
left: 6vw;
width: 80%;
max-width: 80%;
height: 5%;

}

.text-wrapper-7{
font-family: "Montserrat-Regular", Helvetica;
font-weight: 400;
color: #00000061;
font-size: 1.3vw;
letter-spacing: 0;
line-height: normal;
top: 30vw;
text-decoration: none;
right: 6vw;
}



.sign-btn{
background: linear-gradient(180deg, rgb(51, 85, 136) 93.5%, rgb(206, 208, 214) 97%);
font-family: "Montserrat-Bold", Helvetica;
font-weight: 700;
font-size: 1.5rem;
letter-spacing: 0;
line-height: normal;
width: 80%;
height: 3rem;
top: 42vw;
left: 6vw;
/* box-shadow: 0px 22px 75px #00000040; */
}


.acct{
font-family: "Montserrat-Regular", Helvetica;
font-weight: 700;
color: #000000;
font-size: 1.5vw;
letter-spacing: 0;
line-height: normal;
top: 55vw;
left: 10vw;
}

.acct-1{
font-family: "Montserrat-Bold", Helvetica;
font-weight: 700;
color: rgb(51, 85, 136);
font-size: 1.5vw;
text-decoration: none;
letter-spacing: 0;
line-height: normal;
top: 55vw;
right: 9vw;
}



.pass-text{
font-size: 1.2vw;
}

Write a responsive footer that will go with my code

    </div>
  );
};

export default Login;
