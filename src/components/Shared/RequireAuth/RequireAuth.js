import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending, VerificationError] =
    useSendEmailVerification(auth);
  let location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div>
        <div className="container mx-auto px-4">
          <div className="flex mt-20 justify-center items-center text-center">
            <div className="card py-5 px-5 lg:py-12 lg:px-16 lg:w-5/12 bg-red-300">
              <button class="btn btn-circle bg-red-500 text-black mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-2xl text-center">Hi! {user?.displayName}</h2>
              <h2 className="text-xl text-black-700 font-normal text-center mt-3">
                Your Email is not verified. please Check your Email for Verify
                and login again.
              </h2>

              <div class="divider">OR</div>

              <button
                className="btn btn-accent mt-4"
                onClick={async () => {
                  await sendEmailVerification();
                  toast("Email Verification Send. Please Check Email.");
                }}
              >
                Send Email Verification again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
