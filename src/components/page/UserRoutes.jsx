import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Loader } from "../shared/loader";

const Login = lazy(() => import("./Login/Login"));
const Signin = lazy(() => import("./Signin/Signin"));
const About = lazy(() => import("./About/About"));
const NotFoundPage = lazy(() => import("./NotFoundPage/NotFoundPage"));
const Books = lazy(() => import("./Books/Books"));
const BooksId = lazy(() => import("./BooksId/BooksId"));
const Description = lazy(() => import("../page/BooksId/Description"));
const PublicRoute = lazy(() => import("../modules/PublicRoute"));
const PrivateRoute = lazy(() => import("../modules/PrivateRoute"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signin />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/books/:id" element={<BooksId />}>
            <Route path="description" element={<Description />}></Route>
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
