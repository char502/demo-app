import React, { useEffect, useState } from "react";
import "./style.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profiles from "./pages/Profiles";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "./utils/getUsers";
import { Users } from "./model/users";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";

function App() {
  const [profiles, setProfiles] = useState<Users[] | undefined>();

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      const results = await getUsers();
      setProfiles(results);
    };
    fetchAndSetUsers();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Header headerText={"Reusable Header Component"} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles profiles={profiles} />} />
        <Route path="/profile/:id" element={<Profile profiles={profiles} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
