import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import { useState } from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";


function App() {
  const [users,setusers] = useState(
        [
            {
                username:"vishwa",
                password:"123"
            }
        ]
    )
  return (
  <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Login users ={users} />}></Route>
            <Route path={'/Signup'} element={<Signup users={users} setusers={setusers} />}></Route>
            <Route path={'/Landing'} element={<Landing/>}></Route>
        </Routes>
        
        </BrowserRouter>
  );
}

export default App;
