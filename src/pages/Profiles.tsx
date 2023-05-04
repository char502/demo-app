import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Users } from "../model/users";
import { Button } from "../components/Button";

const Profiles = ({ profiles }: any) => {
  return (
    <div className="flex justify-center">
      <div>
        <header className="my-2 text-4xl font-bold">
          This is the profiles page
        </header>

        <div className="my-4">
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

        <div className="my-6">
          <Link to="/">
            <Button buttonText={"Take me home"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
