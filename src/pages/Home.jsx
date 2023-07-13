import React from "react";
import Landing from "../components/Landing";
import FeaturedBooks from "../components/FeaturedBooks";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Information from "../components/Information";
import Reason from "../components/Reason";
import About from "../components/About";

const Home = ({ books }) => {
  return (
    <>
      <Landing />
      <Information />
      <Discounted books={books} />
      <Explore />
      <FeaturedBooks />
      <Reason />
      
    </>
  );
};

export default Home;
