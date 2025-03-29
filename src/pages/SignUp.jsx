import { useState } from "react";
import "../styles/SignUp.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="sign-page">
      <div className="sign-heading">
        <h2>PALNETS</h2>
        <p>Your smart Buddy</p>
      </div>

      <form className="sign-form-card" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="input-box"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input-box"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="input-box"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="input-box"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="input-box-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}
