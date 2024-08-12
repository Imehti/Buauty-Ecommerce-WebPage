import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="loginPageBg"></div>
        <div className="LoginForm">
            <div className="h-fit flex justify-center items-center mt-[20%]">
       <RegisterForm />
        </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
