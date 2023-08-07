import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home/Home';
import Mention from './pages/mention/Mention';

import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/mention' element={<Mention/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

