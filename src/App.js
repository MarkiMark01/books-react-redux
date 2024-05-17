import './App.css';
import React from 'react';
import { useDispatch } from "react-redux";

import { current } from "./components/redux/auth/authOperations";
import UserRoutes from './components/page/UserRoutes';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <UserRoutes />
    </div>
  );
}

export default App;
