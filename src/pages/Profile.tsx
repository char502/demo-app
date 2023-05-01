import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function Profile({ profiles }: any) {
  const { id } = useParams();

  const selectedProfile = profiles.find(
    (profile: { id: number }) => profile.id === Number(id)
  );

  return (
    <div>
      <p>The id of this user is {selectedProfile.id}</p>

      <p>Name: {selectedProfile.name}</p>
      <p>Email: {selectedProfile.email}</p>
      <p>Website: {selectedProfile.website}</p>
    </div>
  );
}

export default Profile;
