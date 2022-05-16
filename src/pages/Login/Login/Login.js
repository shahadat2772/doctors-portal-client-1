import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  // Navigator
  const navigate = useNavigate();

  // Form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // sign in hook using email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // Hook to sign in with google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  let errorElement;

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    errorElement = (
      <p className="text-red-500 text-sm px-1">
        {error?.message || gError?.message}
      </p>
    );
  }

  if (user || gUser) {
    navigate("/home");
  }

  const onSubmit = async (data) => {
    const { email, password } = data;

    await signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="hero h-[100vh]">
      <div className="card w-[385px] bg-base-100 shadow-xl">
        <div className="card-body p-[29px] pt-[35px]">
          <h3 className="text-center text-xl pb-3">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email input */}
            <div className="form-control w-full">
              <label className="label py-[3px]">
                <span className="label-text">Email</span>
              </label>
              <input
                type={`email`}
                className="input input-bordered w-full"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid email",
                  },
                })}
              />
              {/* Error for email filed */}
              <label className="label pb-0">
                {errors.email?.type === "required" && (
                  <span className="text-[12px] text-red-600">
                    *{errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-[12px] text-red-600">
                    *{errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* Input for password */}
            <div className="form-control w-full ">
              <label className="label py-[3px]">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered w-full "
                type={`password`}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum six characters",
                  },
                })}
              />
              {/* Error for password */}
              <label className="label pb-0">
                {errors.password?.type === "required" && (
                  <span className="text-[12px] text-red-600">
                    *{errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-[12px] text-red-600">
                    *{errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {errorElement && errorElement}
            <input
              className="w-full rounded-lg bg-accent text-white h-[48px] block mt-1"
              type="submit"
              value={`LOGIN`}
            />
            <p className="text-sm text-center mt-3">
              New to doctors portal?
              <Link className="text-secondary" to={"/register"}>
                {" "}
                Register
              </Link>
            </p>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
