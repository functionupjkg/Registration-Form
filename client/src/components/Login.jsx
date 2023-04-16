import { useState } from "react";
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaGoogle

} from "react-icons/fa";
import '../../src/style/smedia.css'
import {signWithPopup, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth" ;

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

  const signInWithGoogle = () =>{

  }



  return (

    <div className="login-container">

      <form onSubmit={loginUser}>
        <div ><h2 className="login-head" >Welcome back to smile</h2></div>
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
        <input type="submit" value="Login" />
        <p>New here? <Link to="/register" className="account" >Create a new account.</Link></p>


        {/* ---------------------------Social Link Section-------------------- */}
       
        <p className="auth-login">Or Login with <hr /></p>
        <div className="social-media ">
          <Link >
            <FaFacebookF className="text-sm " />
          </Link>
          <Link >
            <FaLinkedin className="text-sm " />
          </Link>
          <Link >
            <FaGithub className="text-sm " />
          </Link>
          <Link >
            <FaGoogle className="text-sm " />
          </Link>
        </div>
        {/* -----------------End Social Section----------- */}



      </form>

    </div>
  );
}

export default Login;
