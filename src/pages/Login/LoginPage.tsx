import LoginForm from "@/components/LoginForm/LoginForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <section id="loginSection" className="relative overflow-hidden">
        <div id="loginBackground" className="absolute w-full h-full z-10"></div>
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

        <div id="content" className="relative z-20">
          <div
            id="loginTitle"
            className="text-white text-center text-5xl mt-20 mb-3"
          >
            <h1>Ingresa a tu cuenta</h1>
          </div>
          <div id="loginFormC" className="w-full flex justify-center">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
