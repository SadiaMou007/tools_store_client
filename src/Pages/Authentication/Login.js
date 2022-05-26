import React, { useEffect, useRef } from "react";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  //google sign in//
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  //email pass sign in
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  //jwt token
  const [token] = useToken(user || user1);

  //control error,loading and user
  useEffect(() => {
    //  if (user || user1) {
    if (token) {
      navigate(from, { replace: true });
      toast.success("Login Success");
    }
  }, [token, from, navigate]);

  if (loading || loading1) {
    return <Loading></Loading>;
  }
  let errorMessage;
  if (error || error1) {
    errorMessage = (
      <p className="mb-3 text-red-500">
        <small>{error?.message || error1?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const resetP = () => {
    const email = window.prompt("Email");
    if (email) {
      sendPasswordResetEmail(email);
      console.log("send email");
    } else {
      console.log("enter email address");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-1/2 shadow-inner hover:shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <div className=" w-full px-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full "
                  placeholder="Your Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password must be 6 character or more",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {errorMessage}
              <input
                type="submit"
                value="login"
                className="btn w-full btn-primary"
              />

              <p className="my-3">
                New to Tools Store?{" "}
                <Link to={"/signup"}>
                  <span className="text-info cursor-pointer">
                    Create New Account
                  </span>
                </Link>
              </p>
            </form>
            <p className="my-3">
              Forgot Password?{" "}
              <button>
                <span className="text-info cursor-pointer" onClick={resetP}>
                  Reset Password
                </span>
              </button>
            </p>

            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline border-primary w-full"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
