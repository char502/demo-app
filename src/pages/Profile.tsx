import React from "react";
import { useParams, Link } from "react-router-dom";
import { ContactsLayout } from "../components/ContactsLayout";
import { Button } from "../components/Button";
import { Users } from "../model/users";

const Profile = (props: { profiles: Users[] }) => {
  const { id } = useParams();

  const selectedProfile = props.profiles?.find(
    (profile: { id: number }) => profile.id === Number(id)
  );

  return (
    <>
      <div className="w-80 m-auto">
        <p className="text-2xl font-bold flex justify-center">
          Individual Profiles page
        </p>
        <ContactsLayout
          id={selectedProfile?.id}
          name={selectedProfile?.name}
          username={selectedProfile?.username}
          phone={selectedProfile?.phone}
          company={selectedProfile?.company?.name}
          email={selectedProfile?.email}
          website={selectedProfile?.website}
        />
        <div className="my-6 flex justify-center">
          <Link to="/">
            <Button buttonText={"Back to Home"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
