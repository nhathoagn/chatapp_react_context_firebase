
import './App.css';
import Login from "./components/Login";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChatRoom  from "./components/ChatRoom";
import AuthProvider from "./components/Context/AuthProvider";
function App() {
  return (
   <>
       <BrowserRouter>
           <AuthProvider>
               <Routes>
                   <Route element={<Login/>} path="/login"/>
                   <Route element={<ChatRoom/>} path="/"/>
               </Routes>
           </AuthProvider>

       </BrowserRouter>
   </>
  );
}

export default App;
