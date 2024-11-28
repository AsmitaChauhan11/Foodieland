import React, { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    error: "", // Error message for login failure
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.email || !formData.password) {
      setFormData((prevState) => ({
        ...prevState,
        error: "Please enter both email and password",
      }));
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          rememberMe: formData.rememberMe,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Store token in localStorage (or cookies/context based on your needs)
      localStorage.setItem("user_email", data.user.email);
      localStorage.setItem("user_firstname", data.user.first_name);
      localStorage.setItem("user_lastname", data.user.last_name);

      // Redirect to the dashboard (or another page)
      window.location.href = "/";
    } catch (error) {
      console.error("Error:", error);
      setFormData((prevState) => ({
        ...prevState,
        error: error.message, // Display error message from the API
      }));
    }
  };

  return (
    <div className="signin-container">
      <div className="background-overlay">
        <div className="signin-box">
          <h2>Sign In</h2>
          {formData.error && (
            <p className="error-message">{formData.error}</p>
          )}{" "}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="toggle-password"
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>
            <div className="options">
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                Remember me
              </label>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            <p className="register-link">
              Don't have an account? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
