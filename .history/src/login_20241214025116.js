const Login = () => {

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            placeholder="Enter your name" 
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
            placeholder="Enter your email" 
            // value={email}
            // onChange={(e) => setEmail(e.target.value)} 
            // required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            rows="4" 
            placeholder="Write your message here" 
            // value={message}
            // onChange={(e) => setMessage(e.target.value)} 
            // required 
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};


 
export default Login;