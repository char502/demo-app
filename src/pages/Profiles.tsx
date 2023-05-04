import React from "react";
import { Link } from "react-router-dom";
import { Users } from "../model/users";
import { Button } from "../components/Button";

const Profiles = (props: { profiles: Users[] }) => {
  return (
    <div className="flex justify-center">
      <div>
        <header className="my-2 text-4xl font-bold">
          This is the profiles page
        </header>

        <div className="my-4 flex justify-center">
          <ul>
            {props.profiles ? (
              props.profiles.map((profile: Users) => {
                return (
                  <li key={profile.id}>
                    <Link
                      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                      to={`/profile/${profile.id}`}
                      aria-label={`profile name ${profile.name}`}
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

        <div className="my-6 flex justify-center">
          <Link aria-label="Take me home link" to="/">
            <Button buttonText={"Take me home"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
