import React, { useContext } from 'react'
import { withRouter } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";


const UserProfile = () => {
    const user = useContext(UserContext);
    return (
      <React.Fragment>
        {user ? (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" style={{height:"300px"}} alt="Profile_Picture" src={user.photoURL}  />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{user.displayName}</div>
              <p className="text-gray-700 text-base">Hi {user.displayName}!</p>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
}

export default withRouter(UserProfile)