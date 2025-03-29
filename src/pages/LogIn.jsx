import "../styles/LogIn.css";
import { useState } from "react";

export default function LogIn() {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLogData({ ...logData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", logData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="log-body">
      <div className="img-div">
        <img src="" alt="Logo" className="logo" />
      </div>
      <div className="form-div">
        <form className="form">
          <input
            type="email"
            className="input-box"
            placeholder="example@email.com"
            value={logData.email}
            onChange={handleChange}
            require
          />
          <input
            type="password"
            className="input-box"
            placeholder="enter password"
            value={logData.password}
            onChange={handleChange}
            required
          />
          <button
            className="input-box-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Log-In
          </button>
          <a href="#" className="for-pass">
            Forget Password
          </a>
        </form>
      </div>
    </div>
  );
}
