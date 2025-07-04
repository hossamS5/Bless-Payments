import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../../api/auth";
import { FormInput } from "../../../components/atoms/FormInput";

interface SignUpFormData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      navigate("/login");
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    signUpMutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center py-6 md:py-12">
      <div className="w-full max-w-xl shadow-xl card bg-base-100">
        <div className="card-body">
          <h2 className="mb-6 text-2xl font-bold text-center card-title">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormInput
                label="Username"
                name="username"
                register={register}
                errors={errors}
                required
              />
              <FormInput
                label="First Name"
                name="firstName"
                register={register}
                errors={errors}
                required
              />

              <FormInput
                label="Last Name"
                name="lastName"
                register={register}
                errors={errors}
                required
              />

              <FormInput
                label="Phone"
                name="phone"
                type="tel"
                register={register}
                errors={errors}
                required
                pattern={{
                  value: /^[0-9]+$/,
                  message: "Phone number must contain only digits",
                }}
                minLength={{
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                }}
                maxLength={{
                  value: 15,
                  message: "Phone number must not exceed 15 digits",
                }}
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                register={register}
                errors={errors}
                required
                pattern={{
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }}
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                register={register}
                errors={errors}
                required
                minLength={{
                  value: 6,
                  message: "Password must be at least 6 characters",
                }}
              />
            </div>

            <div className="mt-6 form-control">
              <button
                type="submit"
                className="w-full btn btn-primary"
                disabled={signUpMutation.isPending}
              >
                {signUpMutation.isPending ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>

          {signUpMutation.isError && (
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
              <span>Failed to create account. Please try again.</span>
            </div>
          )}

          <div className="mt-4 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
