import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function Profile({ profiles }: any) {
  const { userId } = useParams();

  const selectdProfile = profiles.find(
    (profile: { userId: number }) => profile.userId === Number(userId)
  );

  return (
    <div>
      <p>The id of this user is {selectdProfile.userId}</p>

      <p>Name: {selectdProfile.name}</p>
      <p>Surname: {selectdProfile.surname}</p>
      <p>Age: {selectdProfile.age}</p>
    </div>
  );
}

export default Profile;
