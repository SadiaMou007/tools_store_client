import React from "react";
import Loading from "../Shared/Loading";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/"; //google sign in//
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // react hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //email pass sign in
  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error2] = useUpdateProfile(auth);

  //update user in db//jwt token
  // const [token] = useToken(user || user1);

  const navigate = useNavigate();

  //control error,loading and user
  if (loading || loading1 || updating) {
    return <Loading></Loading>;
  }
  let errorMessage;
  if (error || error1) {
    errorMessage = (
      <p className="mb-3 text-red-500">
        <small>{error?.message || error1?.message || error2?.message}</small>
      </p>
    );
  }

  // if (token) {
  //  navigate("/home");
  //}
  if (user || user1) {
    navigate(from, { replace: true });
    toast.success("SignUp Success");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
    navigate("/");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-1/2 shadow-inner hover:shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Sign Up</h2>
          <div className=" w-full px-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full "
                  placeholder="Your Name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

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
                value="sign up"
                className="btn btn-accent w-full"
              />
              <p className="my-3">
                Already have an account?
                <Link to={"/login"}>
                  <span className="text-info cursor-pointer">Sign In</span>
                </Link>
              </p>
            </form>

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

export default SignUp;
