import { useState } from "react";

import Salesnavbar from "../../components/salesnavbar";

const Salessecurity = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirmation do not match!");
      return;
    }

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
      redirect: "follow",
    };

    try {
      const res = await fetch(
        "https://sims-mup1.onrender.com/users/updatePassword/07a40092-3cfb-4e20-b3ca-ef200e2dd02f",
        requestOptions
      );

      const data = await res.text();

      if (res.ok) {
        alert("Password updated successfully!");
        window.location.href = "/Login";
      } else {
        alert("Failed to update password: " + data);
      }

      console.log(data);
    } catch (error) {
      console.log("error", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <Salesnavbar />
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
        <div className="card shadow p-3" style={{ maxWidth: "500px", width: "100%" }}>
          <h3 className="text-center mb-4 signuptext">Reset Password</h3>
          <p className="text-center">Enter your password twice</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="oldPassword" className="form-label">OLD PASSWORD</label>
              <input
                type="password"
                className="form-control"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">NEW PASSWORD</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">CONFIRM PASSWORD</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>

            <div className="d-grid mb-3">
              <a href="/Login" className="btn btn-secondary">Cancel</a>
            </div>
          </form>
        </div>

        <footer className="mt-5 text-center py-3 w-100 position-absolute footers text-white ">
          <p className="mb-0">&copy;2024 BestworthJvp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Salessecurity;
