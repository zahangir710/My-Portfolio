import React from "react";
import Contact from "../Contact/Contact";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Profile></Profile>
      <Contact></Contact>
    </div>
  );
};

export default Home;
