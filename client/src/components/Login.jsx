import { useState } from "react";
import {Link} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.data) {
      localStorage.setItem("token", data.data);
      alert("Login successful");
      window.location.href = "/dashboard";
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    
    <div className="login-container">
    
      <form onSubmit={loginUser}>
      <div ><h2 >Welcome back to smile</h2></div>
     <hr className="line"></hr>      
      <label>Email Id</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <label>Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input  type="submit" value="Login" />
        <p>New here? <Link to="/register" className="account" >Create a new account.</Link></p>
      </form>
      
    </div>
  );
}

export default Login;
