import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="loginPageBg"></div>
        <div className="LoginForm">
            <div className="h-fit flex justify-center items-center mt-[20%]">
       <LoginForm />
        </div>
        </div>
      
      </div>
    </>
  );
};

export default LoginPage;
