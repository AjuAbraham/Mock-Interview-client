import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Home from "./components/Home.jsx";
import Room from "./components/Room.jsx";
import Error from "./components/Error.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () => {
  
  return (
    <>
    <GoogleOAuthProvider clientId="44357822311-4jntsjai5tsf8fojq22m2m5beej1i3mj.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
