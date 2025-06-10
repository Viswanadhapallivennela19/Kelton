import React, { useState } from "react";
import {Link} from 'react-router-dom'
function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    console.log("Reset Email:", email);
    console.log("New Password:", newPassword);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h4 className="text-center mb-3">Reset Password</h4>
        <p className="text-center text-muted" style={{ fontSize: "0.9rem" }}>
          Enter your email and new password.
        </p>

        {error && (
          <div className="alert alert-danger py-2" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">New Password</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Confirm Password</label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 rounded-pill">
            Reset Password
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Remembered your password?{" "}
            <Link to="/login" className="text-decoration-none fw-bold">Login</Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;