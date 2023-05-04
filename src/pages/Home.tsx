import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const demoPoints = [
  "React",
  "TypeScript",
  "Tailwind.css",
  "Passing props",
  "React-router",
  "Calling an api and combining with dynamic routing",
  "Folder structure - assets, models, utils, components, pages",
  "Reusable components - Button, contactsLayout",
  "Responsiveness - on reusable header and nav bar",
  "Testing - rendering - change on button click - router links",
  "Use of images",
];

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div>
        <p className="my-2 text-4xl font-bold">This is the Home Page</p>
        <p className="my-2 text-2xl">This app demonstrates the following:</p>

        <div className="justify-center flex-col">
          <ul>
            {demoPoints.map((point, i) => (
              <li key={i}>
                <span className="text-fuchsia-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="my-4">
          <Button
            buttonText={"Go to Profile Page"}
            onClick={() => navigate("/profiles")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
