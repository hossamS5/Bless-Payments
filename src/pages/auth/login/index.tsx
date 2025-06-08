import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../api/auth";
import { useStoreAuth } from "../../../store/auth";
import { FormInput } from "../../../components/atoms/FormInput";

interface LoginFormData {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const setToken = useStoreAuth((state) => state.setToken);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      //Used default value bec api doenot return token
      const token = data.token || "true";
      localStorage.setItem("accessToken", JSON.stringify(token));
      setToken(token);
      navigate("/");
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-md shadow-xl card bg-base-100">
        <div className="card-body">
          <h2 className="mb-6 text-2xl font-bold text-center card-title">
            Welcome Back!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
              label="Username"
              name="username"
              register={register}
              errors={errors}
              required
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              register={register}
              errors={errors}
              required
            />

            <div className="mt-6 form-control">
              <button
                type="submit"
                className="w-full btn btn-primary"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>

          {loginMutation.isError && (
            <div className="mt-4 alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-current shrink-0"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Invalid username or password</span>
            </div>
          )}

          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
