import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../Loading/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const [token] = useToken(user);

  if (loading) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate("/appoinment");
  }

  return (
    <button
      onClick={() => signInWithGoogle()}
      className="btn btn-outline text-lg w-full font-normal"
    >
      CONTINUE WITH GOOGLE
    </button>
  );
};

export default SocialLogin;
