import './App.css';
import React from 'react';
import { useDispatch } from "react-redux";

import { current } from "./components/redux/auth/authOperations";
import UserRoutes from './components/page/UserRoutes';
import Header from "./components/page/Header/Header";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <UserRoutes />
    </div>
  );
}

export default App;
