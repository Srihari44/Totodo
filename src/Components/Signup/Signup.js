import React, { useRef, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { auth, signInWithGoogle } from "../../Services/firebase";

const Signup = () => {
  const [rstate, rstateHandler] = useState(false);

  const eRef = useRef(null);
  const pRef = useRef(null);

  const formHandler = async (event) => {
    event.preventDefault();
    await auth
      .createUserWithEmailAndPassword(eRef.current.value, pRef.current.value)
      .then(rstateHandler(true))
      .catch((error) => {
        console.log("Error signing up " + error);
      })
  };
  return (
    <div className="Signupform">
      <form onSubmit={formHandler}>
        <div className="input-group">
          <label>Username: </label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="input-group">
          <label>Email: </label>
          <input ref={eRef} type="email" placeholder="test@example.com" />
        </div>
        <div className="input-group">
          <label>Password: </label>
          <input ref={pRef} type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Submit</button>
        <hr />
        <button onClick={signInWithGoogle}>Sign in with google</button>
      </form>
      {rstate ? <Redirect to="/" /> : null}
    </div>
  );
};

export default withRouter(Signup);
