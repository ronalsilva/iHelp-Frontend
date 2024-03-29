import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './views/home';
import Login from './views/login';
import CreateAccount from './views/createAccount';
import Search from './views/search';
import Collaborator from './views/collaborator';

const Routers: React.FC = () => {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/collaborator" element={<Collaborator/>}/>
            <Route path="/createAccount" element={<CreateAccount/>}/>
          </Routes>
      </Router>
    );
  };

export default Routers;