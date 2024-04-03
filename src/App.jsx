import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Home from "./components/Home.jsx";
import Room from "./components/Room.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>
      </BrowserRouter>
   
       
    </>
  );
};

export default App;
