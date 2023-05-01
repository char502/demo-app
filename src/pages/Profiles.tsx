import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { ProfileProps } from "../App";
import { Users } from "../model/users";

const Profiles = ({ profiles }: any) => {
  // console.log(profiles);

  return (
    <div>
      <header>This is the profiles page</header>

      <ul>
        {profiles ? (
          profiles.map((profile: Users) => {
            return (
              <li key={profile.id}>
                <Link
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  to={`/profile/${profile.id}`}
                >
                  {profile.name}
                </Link>
              </li>
            );
          })
        ) : (
          <h1>...Loading</h1>
        )}
      </ul>
    </div>
  );
};

export default Profiles;

// <ul>
//   <li>
//     <Link to="/profile/1">Book 1</Link>
//   </li>
//   <li>
//     <Link to="/profile/2">Book 2</Link>
//   </li>
//   <li>
//     <Link to="/profile/3">New Book</Link>
//   </li>
//   <li>
//     <Link to="/profile/4">New Book</Link>
//   </li>
// </ul>
