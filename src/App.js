import './App.css';
import React from 'react';
import { useDispatch } from "react-redux";

import ScrollToTop from './components/ScrollToTop';
import { current } from "./components/redux/auth/authOperations";
import UserRoutes from './components/page/UserRoutes';
import Header from "./components/page/Header/Header";
import Footer from "./components/page/Footer/Footer";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
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
