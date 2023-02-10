import React from "react";
import "../../styles/home.css";
import { Hero } from "../component/hero";
import { Trending } from "../component/trending";

export const Home = () => {
  return (
    <div className="container-fluid">
      <Hero />
      <Trending />
    </div>
  );
};
