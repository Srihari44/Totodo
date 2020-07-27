import React, { useRef, useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";
import { withRouter, Redirect } from "react-router-dom";
import { auth, signInWithGoogle } from "../../Services/firebase";

const Login = () => {
  const user = useContext(UserContext);
  const eRef = useRef(null);
  const pRef = useRef(null);
  console.log(process.env.REACT_FIREBASE_API_KEY);
  const formHandler = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(
        eRef.current.value,
        pRef.current.value
      );
    } catch (error) {
      console.log("Error Logging in " + error);
    }
  };
  return (
    <React.Fragment>
      {user ? (
        <Redirect to="/" />
      ) : (
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={formHandler}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                E-mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="test@example.com"
                ref={eRef}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="*********"
                ref={pRef}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
            <p
              className="text-gray-700 text-lg font-bold mb-2 text-center"
            >
              Or
            </p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={signInWithGoogle}
            >
              Sign In with Google
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(Login);
