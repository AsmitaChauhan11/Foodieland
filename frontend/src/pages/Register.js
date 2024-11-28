import React, { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.acceptTerms) {
      setError("You must accept the terms and conditions");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("User registered successfully:", data);

      // Redirect or clear form here if needed
      window.location.href = "/signin";
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="signin-container">
      <div className="background-overlay">
        <div className="signin-box">
          <h2>Create Account</h2>
          {error && <p className="error-message">{error}</p>}{" "}
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
            <div className="input-group">
              <label>Confirm Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
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
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                />
                Accept all terms & conditions
              </label>
            </div>
            <button type="submit" className="login-btn">
              Create Account
            </button>
            <p className="register-link">
              Already have an account <a href="/signin">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
