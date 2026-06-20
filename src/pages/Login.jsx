import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === loginData.email &&
      user.password === loginData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;