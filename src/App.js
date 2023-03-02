import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { Login } from "./Login";
import { Signup } from "./Signup";
import { ForgetPassword } from "./Forgetpassword";
import { Resetpassword } from "./Resetpassword";
import { Page404 } from "./Page404";
import { Todolist } from "./Todolist";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path ="/Signup" element = {<Signup/>}/>
        <Route path ="/ForgetPassword" element = {<ForgetPassword/>}/>
        <Route path ="/Resetpassword" element = {<Resetpassword/>}/>
        <Route path ="/Page404" element = {<Page404/>}/>
        <Route path ="/Todolist" element = {<Todolist/>}/>
      </Routes>
    </Router>
  
    );
}

export default App;
