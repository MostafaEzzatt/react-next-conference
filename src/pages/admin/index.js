import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const auth = useAuth();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <button
        onClick={() => auth.logIn()}
        className="px-8 py-3 bg-brand-dark text-white rounded"
      >
        {" "}
        login{" "}
      </button>
    </div>
  );
};

export default Login;
