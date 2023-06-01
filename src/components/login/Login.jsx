import { useRef } from "react";
import "./Login.css";
export default function Login() {
  const emailRef = useRef();
  const PasswordRef = useRef();

  const messageBoxFn = (message) => {
    const messageBox = document.getElementById("message-box");
    messageBox.innerText = message;
    setTimeout(() => {
      messageBox.innerText = "";
    }, 5000);
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = PasswordRef.current.value;
    if (email === "" || password === "") {
      messageBoxFn("Required Field ❗");
    } else {
      console.log(email, password);
      messageBoxFn("Login successfull ❗");
    }
  };

  const logo = require("../../images/loginLogo.png");

  return (
    <div className="login">
      <div className="login-container">
        <div id="leftPictures">
          <div className="startingIcon">
            <i className="fa-solid fa-rotate-right"></i>
            <i className="fa-solid fa-xmark"></i>
            <i className="fa-regular fa-circle"></i>
          </div>
          <div className="middledesc">
            <h2>100% Uptime 😎</h2>
            <p>
              Zero infrastructure <br /> management
            </p>
          </div>
          <div className="bottominfo">
            <a href="/">
              😊
              <span>aesthisia.com</span>
            </a>
            <div className="social-links">
              <a href="/" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="/" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <form id="rightform">
          <div className="formlogo">
            <img src={logo} alt="logo" />
            <h2>
              Welcome <span>Back</span>
            </h2>
            <p>Glad to see you Again !</p>
          </div>
          <div className="inputscontainer">
            <input
              className="loginInputs"
              required="required"
              name="email"
              id="email"
              type="email"
              ref={emailRef}
              placeholder="Email:"
              autoComplete="off"
            />
            <input
              className="loginInputs"
              required="required"
              name="password"
              id="password"
              type="password"
              ref={PasswordRef}
              placeholder="Password:"
              autoComplete="off"
            />
            <div id="forgetPassword">
            <span>Forget Password ?</span></div>
            <button className="loginButton" onClick={handleSignIn}>
              Log In
            </button>
            <p id="message-box"></p>
          </div>

          <p className="signUpPara">
            Don't an account yet? <span>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
