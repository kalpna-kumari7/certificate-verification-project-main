import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://certify-ztws.onrender.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.success) toast.success(data.message);

          
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          isAdmin: false,
        });

        setTimeout(() => {
          navigate("/auth/login");
        }, 6000);
      } else {
        if (data.errors) {
          Object.values(data.errors).forEach((errorArray) => {
            errorArray.forEach((errorMsg) => toast.error(errorMsg));
          });
        } else {
          toast.error(data.message || "Registration failed");
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
      <div className="auth-container" id="registerPage">
        <div className="auth-image">
          <div className="image-content">
            <h1>Join Certify Today!</h1>
            <p>
              Create your account and start verifying certificates with our secure and trusted
              platform.
            </p>
            <div className="cert-showcase">
              <div className="cert-mini">
                <i className="fas fa-user-plus"></i>
                <h5>Easy Signup</h5>
              </div>
              <div className="cert-mini">
                <i className="fas fa-lock"></i>
                <h5>Protected</h5>
              </div>
              <div className="cert-mini">
                <i className="fas fa-download"></i>
                <h5>Download</h5>
              </div>
              <div className="cert-mini">
                <i className="fas fa-star"></i>
                <h5>Premium</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-form">
          <div className="form-wrapper">
            <NavLink to="/" className="back-link">
              <i className="fas fa-arrow-left"></i> Back to Home
            </NavLink>

            <h2 className="form-title">Create Account</h2>
            <p className="form-subtitle">Start your journey with Certify</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  placeholder="JohnDoe123"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Create a strong password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Re-enter your password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="checkbox-wrapper mb-3 ">
                <input
                  type="checkbox"
                  id="isAdmin"
                  name="isAdmin"
                  checked={formData.isAdmin}
                  onChange={handleChange}
                />
                <label htmlFor="isAdmin">
                  Register as an Admin to manage certificates and users.
                </label>
              </div>

              <button type="submit" className="btn btn-auth" disabled={loading}>
                {loading ? "Please Wait  ..." : "Create Account"}
              </button>
            </form>

            <div className="switch-form">
              Already have an account? <NavLink to={"/auth/login"}>Sign In</NavLink>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default Register;