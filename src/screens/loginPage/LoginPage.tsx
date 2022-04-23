import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./components/loginForm/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div>
      <LoginForm />
      <div className="login-page-unassigned">
        <div>For Unassigned Users</div>
        <div className="login-page-unassigned--link">
          <Link to="/about">Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
