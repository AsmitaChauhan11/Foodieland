import { Box, Button, TextField } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import React, { useState } from "react";

function Profile() {
  const email = localStorage.getItem("user_email");

  // State to hold form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `http://127.0.0.1:5000/users/${email}`;

    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
        }),
      });

      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating profile");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user_email");
    window.location.href = "/signin";
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      onSubmit={handleSubmit}
    >
      <TextField
        name="firstName"
        label="First Name"
        variant="outlined"
        value={formData.firstName}
        onChange={handleChange}
        sx={{ width: "50%", m: 4 }}
      />
      <TextField
        name="lastName"
        label="Last Name"
        variant="outlined"
        value={formData.lastName}
        onChange={handleChange}
        sx={{ width: "50%", m: 4 }}
      />
      <Button
        type="submit" // Submits the form
        variant="contained"
        color="success"
        sx={{ width: "20%", m: 7, fontFamily: "monospace", fontSize: "1.2rem" }}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        onClick={handleLogout}
        color="error"
        startIcon={<LogoutOutlinedIcon />}
        sx={{ width: "20%", fontFamily: "monospace", fontSize: "1.2rem" }}
      >
        Logout
      </Button>
    </Box>
  );
}

export default Profile;
