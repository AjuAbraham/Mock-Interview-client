import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx';
import Home from './components/Home.jsx'
const App = () => {
  return <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/home" element={<Home/>} />
   </Routes>
   </BrowserRouter>
  </>;
};

export default App;
