import React from 'react';

const Body = () => {
  return (
    <div className="background-image">
         
    <div className="container mt-5">
      <h2>Login</h2>
      <form className="login">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            placeholder="Enter your email" 
            // value={name}
            // onChange={(e) => setName(e.target.value)} 
            // required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter your password" 
            // value={email}
            // onChange={(e) => setEmail(e.target.value)} 
            // required 
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
      
    </div>
  );
};

export default Body;
