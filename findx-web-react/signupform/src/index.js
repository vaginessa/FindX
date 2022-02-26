import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<App/>}/>
      <Route path = "/signup" element = {<SignUpComponent/>}/>
      <Route path = "/signin" element = {<SignInComponent/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
