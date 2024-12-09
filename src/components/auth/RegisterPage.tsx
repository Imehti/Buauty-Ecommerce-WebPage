import RegisterForm from "./RegisterForm";

const LoginPage = () => {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-2">
        <div className="hidden loginPageBg md:block"></div>
        <div className="LoginForm col-span-3 md:col-span-1">
          <div className="h-fit flex justify-center items-center mt-[20%]">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
