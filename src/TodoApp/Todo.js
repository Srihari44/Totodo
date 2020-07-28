import React, { useState, useRef, useContext } from "react";
import { withRouter, Redirect } from 'react-router-dom';
import ItemContainer from "./Components/ItemContainer";
import { auth } from '../Services/firebase'
import { UserContext } from '../Providers/UserProvider'

function TodoApp() {

  const user = useContext(UserContext);
  const [state, stateHandler] = useState({ data: [] });
  const wRef = useRef(null);
    const ddRef = useRef(null);
  const tRef = useRef(null);
  const dRef = useRef(null);

  const deleteHandler = (key) => {
    const newData = state.data;
    const updData = newData.filter((data) => data.id !== key);
    stateHandler({ data: updData });
  };

  const formHandler = (event) => {
    event.preventDefault();
    const newData = state.data;
    newData.push({
      id: (newData.length + 1).toString(),
      title: wRef.current.value,
      description: ddRef.current.value,
      time: tRef.current.value,
      date: dRef.current.value,
    });
    stateHandler({ data: newData });
  };

  return (
    <React.Fragment>
      {user ? (
        <div className="container">
          <h2 className="text-2xl font-semilight text-center mb-4" style={{marginTop:"-25px"}}>Welcome {user.displayName}!</h2>
          <form
            className="bg-white shadow-md rounded px-8 pb-8 mb-4"
            onSubmit={formHandler}
          >
            <div className="input-group mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter Title:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={wRef}
                type="text"
                required
              />
            </div>
            <div className="input-group mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter Description:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={ddRef}
                type="text"
              />
            </div>
            <div className="input-group mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter Time:
              </label>
              <input ref={tRef} type="time" required/>
            </div>
            <div className="input-group mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter date:{" "}
              </label>
              <input ref={dRef} type="date" />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add new
            </button>
          </form>
          {!state.data.empty ? (
            <ItemContainer data={state.data} deleted={deleteHandler} />
          ) : null}
          <div className="flex justify-center mt-16 mb-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                auth.signOut();
              }}
            >
              Log out
            </button>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
}

export default withRouter(TodoApp);
