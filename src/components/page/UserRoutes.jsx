import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Login = lazy(() => import("./Login/Login"));
const Signin = lazy(() => import("./Signin/Signin"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signin />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
