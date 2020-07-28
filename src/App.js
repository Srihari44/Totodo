import React from "react";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserProfile from "./Components/UserProfile";
import { Switch, Route } from "react-router-dom";
import Todo from "./TodoApp/Todo";
import UserProvider from "./Providers/UserProvider";

function App() {
  return (
    <React.Fragment>
      <UserProvider>
        <Navbar />
        <div className="container flex flex-col justify-center items-center py-12 px-6">
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
