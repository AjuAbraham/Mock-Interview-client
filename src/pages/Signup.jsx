import { SignUp } from "@clerk/clerk-react";
import { ThemeModeToggler } from "../components/ThemeModeToggler";
import { useTheme } from "../components/ThemeProvider";

const Signup = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`w-[100vw] h-[100vh]`}>
        <div className="grid sm:grid-cols-2 sm:min-h-screen dark:bg-gray-900">
          <div className="hidden sm:block">
            <img
              className="w-full h-full"
              src="\src\assets\dem3.jpg"
              alt="404"
            />
          </div>
          {/* <div className="p-20 pt-36">
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
            <div className="flex justify-center">
           <SignUp signInUrl="/login" forceRedirectUrl={'/login'}/>
           </div>
          </div> */}
          <div className="flex flex-col gap-20">
            <div className="flex items-center justify-between px-2 mt-3">
              <img
                src={`${
                  theme === "dark"
                    ? "src/assets/blackLogo.png"
                    : "src/assets/whiteLogo.png"
                }`}
                className="sm:w-[300px] "
                alt="404"
              />

              <ThemeModeToggler />
            </div>
            <div className="flex items-center justify-center">
              <SignUp signInUrl="/login" forceRedirectUrl={"/login"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
