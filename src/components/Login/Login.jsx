import "./login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { login, signup } from "../../firebase";
function Login() {
  const [SignInState, setSignIn] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if (SignInState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };
  return (
    <>
      <div className="login">
        <img src={logo} alt="" className="login-logo" />
        <div className="login-form">
          <h1>{SignInState}</h1>
          <form action="">
            {SignInState === "Sign Up" ? (
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            ) : (
              <></>
            )}

            <input
              type="Email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={user_auth} type="submit">{SignInState}</button>

            <div className="form-help">
              <div className="remember">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="switch-form">
            {SignInState === "Sign In" ? (
              <p>
                New to Netflix?
                <span
                  onClick={() => {
                    setSignIn("Sign Up");
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already Have Account
                <span
                  onClick={() => {
                    setSignIn("Sign In");
                  }}
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
