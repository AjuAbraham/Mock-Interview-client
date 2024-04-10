import { useState } from "react";
import DarkMode from "../utils/DarkMode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const loginWithGoogle = async () => {
  window.open("http://localhost:8000/api/v1/auth/google/callback", "_self");
};
const SignUp = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    console.log("Form Data:", Object.fromEntries(formData));
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        formData,config
      );
      console.log("register data is: ", res);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div
        className="fixed right-[-60px]"
        onClick={() => setDarkMode(!darkMode)}
      >
        <DarkMode />
      </div>

      <div
        className={`w-[100vw] h-[100vh] ${
          localStorage.getItem("mode") == "black" && "dark"
        }`}
      >
        <div className="grid sm:grid-cols-2 sm:min-h-screen dark:bg-gray-900">
          <div className="hidden sm:block">
            <img
              className="w-full h-full"
              src="\src\assets\dem3.jpg"
              alt="404"
            />
          </div>
          <div className="p-20 pt-36">
            <div className="absolute sm:top-4 sm:left-[50%] w-[280px]  top-5 left-0  ">
              <img
                src={`${
                  localStorage.getItem("mode") == "black"
                    ? "src/assets/blackLogo.png"
                    : "src/assets/whiteLogo.png"
                }`}
                className="sm:w-[300px] "
                alt="404"
              />
            </div>
            <div className="border-black border-4 rounded-xl p-4 dark:text-white dark:border-violet-500">
              <h1 className="font-bold from-neutral-400 text-4xl ">Sign Up</h1>
              <p className="pt-2">Welcome to our website 👌</p>
              <div className="mt-10 flex ">
                <form
                  autoComplete="off"
                  className="flex flex-col  w-full"
                  onSubmit={handleSubmit}
                >
                  <input
                    name="username"
                    className="p-2 border-b-2 border-b-black mb-3 outline-none dark:rounded-lg text-base dark:bg-slate-600"
                    type="text"
                    placeholder="Username"
                    value={data.username}
                    onChange={handleChange}
                  />
                  <input
                    className="p-2 border-b-2 border-b-black mb-3 outline-none dark:rounded-lg text-base dark:bg-slate-600"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={handleChange}
                  />
                  <input
                    className="p-2 border-b-2 border-b-black mb-3 outline-none dark:rounded-lg text-base dark:bg-slate-600"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={data.password}
                    onChange={handleChange}
                  />

                  <button type="submit" className="rounded-lg  bg-black text-white w-full h-[50px] m-auto my-3 hover:bg-zinc-500 dark:hover:text-black dark:hover:bg-white">
                    Sign Up
                  </button>
                  <p className="text-center mb-2 font-bold text-xl ">Or</p>
                  <button
                    onClick={loginWithGoogle}
                    className="border-2 dark:border-white border-black shadow-2xl p-2 flex justify-center items-center gap-x-4 rounded-xl dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white"
                  >
                    <img
                      src="src/assets/google.png"
                      className="w-8 h-8 inline"
                      alt="404"
                    />
                    Log In With Google
                  </button>
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

export default SignUp;
