import { Metadata } from "next";
import LoginClient from "./client";

export const metadata: Metadata = {
  title: "celerCV | Login",
  description: "Login to your account",
};

const Login = () => {
  return <LoginClient />;
};

export default Login;
