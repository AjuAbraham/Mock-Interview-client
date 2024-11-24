import {   useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import DarkMode from "../utils/DarkMode.jsx";
import axios from "axios";




const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [user,setUser] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]:value
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("email",user.email);
    // formData.append("password",user.password);
    try {
      const res = await axios.post("http://localhost:3000/api/v1/users/login",user);
      console.log("res is: ",res);
      if(res){
        localStorage.setItem('accessToken',res.data.accessToken)
        navigate('/home');
      }
    } catch (error) {
      console.log("error",error);
      toast.error(error.response.data.message);
    }
  }
  
  return (
    <>
        <div className="fixed right-[-60px]" onClick={() => setDarkMode(!darkMode)}>
          <DarkMode/>
        </div>
  
      <div className={`w-[100vw] h-[100vh]`}>
        <div className="grid sm:grid-cols-2 sm:min-h-screen dark:bg-gray-900">
          <div className="hidden sm:block">
            <img
              className="w-full h-full"
              src="\src\assets\dem3.jpg"
              alt="404"
            />
          </div>
          <div className="p-20 pt-36">
            <div className="absolute sm:top-4 sm:left-[50%] w-[280px]  top-5 left-0 ">
            <img
                src={`${
                  localStorage.getItem("mode") === "black"
                    ? "src/assets/blackLogo.png"
                    : "src/assets/whiteLogo.png"
                }`}
                className="sm:w-[300px] "
                alt="404"
              />
            </div>
            <div className="border-black border-4 rounded-xl p-4 dark:text-white dark:border-violet-500">
              <h1 className="font-bold from-neutral-400 text-4xl ">Log In</h1>
              <p className="pt-2">Enter Your Credentails 🫡</p>
              <div className="mt-10 flex ">
                <form  className="flex flex-col  w-full">
                  <input
                    className="p-2 border-b-2 border-b-black mb-3 outline-none dark:rounded-lg text-base  dark:bg-slate-600"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={user.value}
                    placeholder="Email"
                  />
                  <input
                    className="p-2 border-b-2 border-b-black mb-3 outline-none dark:rounded-lg text-base  dark:bg-slate-600"
                    type="password"
                    name="password"
                    value={user.value}
                    onChange={handleChange}
                    placeholder="password"
                  />

                  <button onClick={handleSubmit} className="rounded-lg  bg-black text-white w-full h-[50px] m-auto my-3 hover:bg-zinc-500 dark:hover:text-black dark:hover:bg-white">
                    Log In
                  </button>
                  <button  className="rounded-lg bg-white border-2 border-black text-black w-full h-[50px] m-auto hover:bg-slate-100 dark:bg-black dark:text-white dark:hover:text-black dark:hover:bg-white">
                    <Link to={"/signup"}>Sign Up </Link>
                  </button>
                  {/* <p className="text-center mb-2 font-bold text-xl ">Or</p> */}
                  {/* <button  className="border-2 dark:border-white border-black shadow-2xl p-2 flex justify-center items-center gap-x-4 rounded-xl dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white"> 
                    <img src="src/assets/google.png" className="w-8 h-8 inline" alt="404" /> 
                    Log In With Google
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster 
        toastOptions={{
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </>
  );
};

export default Login;
