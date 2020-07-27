import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import UserProfile from "./Components/UserProfile/UserProfile";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Todo from "./TodoApp/Todo";
import UserProvider from "./Providers/UserProvider";

function App() {
  return (
    <React.Fragment>
      <UserProvider>
        <Navbar />
        <div className=" flex flex-col justify-center">
          <Switch>
            <Route path="/" exact component={Todo} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={UserProfile} />
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
        </div>
      </UserProvider>
    </React.Fragment>
  );
}

export default App;
