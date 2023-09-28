import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Form from './Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Form/> */}
    {
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/App' element={<App/>}/>

      </Routes>
      </BrowserRouter>
    }
  </React.StrictMode>
);

