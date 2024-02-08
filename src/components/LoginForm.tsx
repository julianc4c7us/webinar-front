import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const path = "http://localhost:3000/api/public/login";
      await axios.post(path, form);
      localStorage.setItem("token", "Bearer 1234");
      navigate("/app");
    } catch (error) {
      console.error(error);
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="Form">
        <h1>Login</h1>
        <div className="Input">
          <label htmlFor="">Email</label>
          <input
            name="username"
            onChange={handleChange}
            placeholder="Enter your email"
            type="text"
            id=""
          />
        </div>
        <div className="Input">
          <label htmlFor="">Password</label>
          <input
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
            type="text"
            id=""
          />
        </div>
        <button className="Button" type="submit">
          Login
        </button>
        {error && (
          <p
            style={{
              color: "red",
              border: "1px solid red",
              padding: "10px",
              textAlign: "center",
            }}
          >
            {error}
          </p>
        )}
      </form>
    </>
  );
};
