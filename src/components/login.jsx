import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://sims-mup1.onrender.com/auth/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Login successful:", result.data);
        alert(`Welcome, ${result.data.username}!`);

        localStorage.setItem("user", JSON.stringify(result.data));

        if (result.data.role === "ADMIN") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/home";
        }
      } else {
        setError(result.error || "Invalid username or password.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex admin-body">
      <div
        className="side text-white d-flex flex-column align-items-center p-3 vh-100"
        style={{ width: "200px" }}
      >
        <a href="/" className="d-block mb-4">
          <img src="./logo.png" alt="Logo" className="img-fluid" />
        </a>
      </div>

      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
        <div
          className="card shadow p-3"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <h3 className="text-center mb-4 signuptext">Login</h3>

          {error && <p className="text-danger text-center">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="my-3 text-end text-red-500">
              <a href="/Reset1" className="text-decoration-none text-dark">
                Forgot Password?
              </a>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            <div className="text-center mt-3">
              <p>
                Don't have an account?{" "}
                <a href="/Signup" className="text-decoration-none">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>

        <footer className="mt-auto text-center py-3 w-100 position-absolute footers text-white">
          <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
