import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Loader } from "../shared/Loader";

const Books = lazy(() => import("./Books/Books"));
const Login = lazy(() => import("./Login/Login"));
const Signin = lazy(() => import("./Signin/Signin"));
const PublicRoute = lazy(() => import("../modules/PublicRoute"));
const PrivateRoute = lazy(() => import("../modules/PrivateRoute"));
const BooksId = lazy(() => import("../page/BooksId/BooksId"));
const Description = lazy(() => import("../page/BooksId/Description"));
const Cart = lazy(() => import("../page/Cart/Cart"));
const NotFoundPage = lazy(() => import("./NotFoundPage/NotFoundPage"));
const About = lazy(() => import("./About/About"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signin />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/books/:id" element={<BooksId />}>
            <Route path="description" element={<Description />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
