import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore" className="explore">
        <div className="button-container">
          <Link to="/books">
            <button id="more" className="btn">More items</button>
          </Link>
          </div>
    </section>
  );
};

export default Explore;
