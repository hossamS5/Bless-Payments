import { lazy } from "react";
import type { IRoute } from "./types";
const Landing = lazy(() => import("../pages/landing"));
const PetId = lazy(() => import("../pages/petId"));
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
  {
    path: "/pet/:id",
    component: PetId,
    name: "PetId",
    isPublic: false,
  },
];

export default routes;
