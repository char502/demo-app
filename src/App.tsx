import React, { useState } from "react";
import "./style.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profiles from "./pages/Profiles";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  useMatch,
  Navigate,
} from "react-router-dom";

export interface ProfileProps {
  userId: number;
  name: string;
  surname: string;
  age: number;
}

const profilesFromApi: ProfileProps[] = [
  {
    userId: 1,
    name: "Andrew",
    surname: "Birne",
    age: 45,
  },
  {
    userId: 2,
    name: "Amy",
    surname: "Ryan",
    age: 32,
  },
  {
    userId: 3,
    name: "Martin",
    surname: "Simpson",
    age: 27,
  },
  {
    userId: 4,
    name: "Oscar",
    surname: "Phillips",
    age: 35,
  },
];

function App() {
  // let profiles: ProfileProps[] = profilesFromApi;

  let activeClassName = "nav-active";

  //  const [profiles, setProfiles] = useState<any>()
  //

  // useEffect(() => {

  // }, [input]);

  // const match = useMatch("/profile/:userId");
  // const prof: any = match
  //   ? profiles.find(
  //       (prof: ProfileProps) => prof.userId === Number(match.params.userId)
  //     )
  //   : null;

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1>Demo App</h1>
        </header>
        <nav>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Contact
          </NavLink>
          {/* <NavLink to="dashboard">Dashboard</NavLink> */}
          <NavLink to="profiles">Profiles</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="dashboard" element={<Navigate to="/" />} /> */}

          <Route
            path="/profiles"
            element={<Profiles profiles={profilesFromApi} />}
          />
          <Route
            path="/profile/:userId"
            element={<Profile profiles={profilesFromApi} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
