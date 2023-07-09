import React from "react";
import landImg from "../assets/istockphoto-185229063-612x612-removebg-preview.png"
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section class="home" id="home">
      <div class="content">
        <h3>
          <span class="red">Baruch</span> Wholesale and Retail Supermarket
        </h3>
        <p>
          At <span class="red">Baruch</span>, our mission is to provide the
          highest quality products at the lowest prices in Tobago. We are
          committed to delivering exceptional value and fast service, ensuring a
          delightful shopping experience for our customers.
        </p>
        <Link to="/books" class="btn">Order Now!</Link>
      </div>

      <div class="image">
        <img src={landImg} alt="" />
      </div>
    </section>
  );
};

export default Landing;
