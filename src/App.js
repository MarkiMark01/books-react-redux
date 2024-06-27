import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./components/redux/auth/auth-operations";
import UserRoutes from "./components/page/UserRoutes";
import Footer from "./components/page/Footer/Footer";
import Header from "./components/page/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import './i18next/i18n';
import { googleLoginSuccess } from "./components/redux/auth/auth-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());

    const googleUser = JSON.parse(localStorage.getItem("googleUser"));
    const isGoogleLogin = JSON.parse(localStorage.getItem("isGoogleLogin"));

    if (googleUser && isGoogleLogin) {
      dispatch(googleLoginSuccess(googleUser));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <ScrollToTop>
        <Header />
        <UserRoutes />
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;

