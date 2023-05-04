import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ContactsLayout } from "../components/ContactsLayout";
import { Button } from "../components/Button";

function Profile({ profiles }: any) {
  const { id } = useParams();

  const selectedProfile = profiles?.find(
    (profile: { id: number }) => profile.id === Number(id)
  );

  return (
    <>
      <div className="w-80 m-auto">
        <p>Profile page</p>
        <ContactsLayout
          id={selectedProfile?.id}
          name={selectedProfile?.name}
          username={selectedProfile?.username}
          phone={selectedProfile?.phone}
          company={selectedProfile?.company?.name}
          email={selectedProfile?.email}
          website={selectedProfile?.website}
        />
        <div className="my-6">
          <Link to="/">
            <Button buttonText={"Back to Home"} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
