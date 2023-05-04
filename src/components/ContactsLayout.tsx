import React from "react";
import { Company } from "../model/users";

interface ContactsLayoutProps {
  id: number;
  name: string;
  company: string;
  username: string;
  phone: string;
  email: string;
  website: string;
}

export const ContactsLayout = ({
  id,
  name,
  company,
  username,
  phone,
  email,
  website,
}: ContactsLayoutProps) => {
  return (
    <div className="bg-gray-200 rounded-xl p-6 mt-6">
      <p>
        <span className="text-lg font-bold">Name:</span> {name}
      </p>
      <p>
        <span className="text-lg font-bold">Username:</span> {username}
      </p>
      <p>
        <span className="text-lg font-bold">Company:</span> {company}
      </p>
      <p>
        <span className="text-lg font-bold">Phone:</span> {phone}
      </p>
      <p>
        <span className="text-lg font-bold">Email:</span>{" "}
        <span className="underline text-blue-600 hover:text-blue-800 visited:text-red-600">
          {email}
        </span>
      </p>
      <p>
        <span className="text-lg font-bold">Website:</span>{" "}
        <span className="underline text-blue-600 hover:text-blue-800 visited:text-green-600">
          {website}
        </span>
      </p>

      <p>
        <span className="text-lg font-bold">ID:</span> The id of this user is{" "}
        {id}
      </p>
    </div>
  );
};
