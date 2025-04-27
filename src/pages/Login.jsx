import { SignIn } from "@clerk/clerk-react";
import { ThemeModeToggler } from "../components/ThemeModeToggler";
import { useTheme } from "../components/ThemeProvider";

const Login = () => {
  const {theme} = useTheme();
 
  return (
    <>
      <div className="grid sm:grid-cols-2 sm:min-h-screen dark:bg-gray-900">
        <div className="hidden sm:block">
          <img className="w-full h-full" src="\src\assets\dem3.jpg" alt="404" />
        </div>
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
            <SignIn signUpUrl={"/signup"} forceRedirectUrl={"/home"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
