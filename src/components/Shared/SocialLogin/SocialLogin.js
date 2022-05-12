import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <button
      onClick={() => signInWithGoogle()}
      class="btn btn-outline text-lg w-full font-normal"
    >
      CONTINUE WITH GOOGLE
    </button>
  );
};

export default SocialLogin;
