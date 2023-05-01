import React, { useEffect, useState } from "react";
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
import { getUsers } from "./utils/getUsers";
import { Users } from "./model/users";
// @ts-ignore
import { Navbar } from "./components/Navbar";

// import Navbar from "./components/Navbar";

function App() {
  let activeClassName = "nav-active";

  const [profiles, setProfiles] = useState<Users[] | undefined>();

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      const results = await getUsers();
      setProfiles(results);
    };
    fetchAndSetUsers();
  }, []);

  console.log(profiles);

  // const match = useMatch("/profile/:userId");
  // const prof: any = match
  //   ? profiles.find(
  //       (prof: ProfileProps) => prof.userId === Number(match.params.userId)
  //     )
  //   : null;

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <header>
          <h1 className="text-6xl text-red-500">Demo App</h1>
        </header>
        <nav>
          <NavLink
            to=""
            // className={({ isActive }) =>
            //   isActive ? activeClassName : undefined
            // }
            className="text-black aria-[current=page]:text-blue-400"
          >
            Home
          </NavLink>
          <NavLink
            to="profiles"
            // className={({ isActive }) =>
            //   isActive ? activeClassName : undefined
            // }
            className="text-black aria-[current=page]:text-blue-400"
          >
            Profiles
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles profiles={profiles} />} />
          <Route
            path="/profile/:id"
            element={<Profile profiles={profiles} />}
          />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
