import './assets/css/App.scss';
import Login from './components/pages/Login';
import { PrivateRoutes } from './components/pages/PrivateRoutes';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import React, { useEffect, useState } from "react";
import ForgotPassword from './components/pages/ForgotPassword';

function App() {
  const [currUser, setCurrUser] = useState("false");
  
  useEffect(() => {
    setCurrUser(sessionStorage.getItem("authorized"))
  }, [setCurrUser]);

  return (
    <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reset' element={<ForgotPassword/>}/>
          <Route element={<PrivateRoutes auth={currUser}/>}>
              <Route path='/' element={<Home/>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;