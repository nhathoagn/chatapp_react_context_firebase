
import './App.css';
import Login from "./components/Login";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChatRoom  from "./components/ChatRoom";
function App() {
  return (
   <>
       <BrowserRouter>
           <Routes>
               <Route element={<Login/>} path="/login"/>
               <Route element={<ChatRoom/>} path="/"/>
           </Routes>
       </BrowserRouter>
   </>
  );
}

export default App;
