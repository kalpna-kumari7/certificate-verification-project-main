import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "../assets/css/auth.css";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    login_id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://certify-ztws.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        //   console.log(data.data.token);       // access JWT
        // console.log(data.data.username);    // access username
        // console.log(data.data.isAdmin);     // access role

        //set jwt token in client side in local storage
        localStorage.setItem("isAdmin", data.data.isAdmin);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("username", data.data.username);

        toast.success(data.message, { autoClose: 5000 });

        setTimeout(() => {
          if (data.data.isAdmin) {
            navigate(`/admin`);
          } else {
            navigate(`/student`);
          }
        }, 5000);
      } else {
        if (data.errors) {
          Object.values(data.errors).forEach((errorArray) => {
            errorArray.forEach((errorMsg) => toast.error(errorMsg));
          });
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="auth-container" id="loginPage">
        <div className="auth-image">
          <div className="image-content">
            {/* <div className="brand-logo">
            </div> */}
            <h1>Welcome Back!</h1>
            <p>
              Sign in to access your certificate verification dashboard and manage your credentials.
            </p>
            <div className="cert-showcase">
              <div className="cert-mini">
                <i className="fas fa-shield-alt"></i>
                <h5>Secure</h5>
              </div>
              <div className="cert-mini">
                <i className="fas fa-bolt"></i>
                <h5>Fast</h5>
              </div>
              <div className="cert-mini">
                <i className="fas fa-check-circle"></i>
                <h5>Verified</h5>
              </div>
              <div className="cert-mini">
                <i className="fas fa-globe"></i>
                <h5>Global</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-form">
          <div className="form-wrapper">
            <NavLink to="/" className="back-link">
              <i className="fas fa-arrow-left"></i> Back to Home
            </NavLink>

            <h2 className="form-title">Sign In</h2>
            <p className="form-subtitle">Enter your credentials to access your account</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username / Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your username or email"
                  required
                  name="login_id"
                  id="login_id"
                  value={formData.login_id}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    required
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-auth" disabled={loading}>
                {loading ? "Please Wait..." : "Sign In"}
              </button>
            </form>

            <div className="switch-form">
              Don't have an account? <NavLink to={"/auth/register"}>Create Account</NavLink>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};
export default Login;