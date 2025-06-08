import { lazy } from "react";
import type { IRoute } from "./types";
const Landing = lazy(() => import("../pages/landing"));
const Login = lazy(() => import("../pages/auth/login"));
const SignUp = lazy(() => import("../pages/auth/signUp"));

const routes: IRoute[] = [
  {
    path: "/login",
    component: Login,
    name: "Login",
    isPublic: true,
  },
  {
    path: "/signup",
    component: SignUp,
    name: "SignUp",
    isPublic: true,
  },
  {
    path: "/",
    component: Landing,
    name: "Landing",
    isPublic: false,
  },
];

export default routes;
