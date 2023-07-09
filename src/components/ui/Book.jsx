import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const Book = ({ book }) => {
  return (
      <div className="box">
        <Link to={`/books/${book.id}`}>
          <img src={book.url} alt="" className="book__img" />
        </Link>
        <h3 className="book__title">
          <Link to={`/books/${book.id}`} className="book__title__link">
            {book.title}
          </Link>
        </h3>
        {/* <Rating rating={book.rating} /> */}
        <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
        <a href="#" class="btn">order now</a>
      </div>
  );
};

{
  /* <section class="popular" id="popular">
      <h1 class="heading"><span>Popular</span> Items</h1>

      <div class="box-container">
        <div class="box">
          <span class="price"> $98.00 </span>
          <img src="images/flour.png" alt="" />
          <h3>Ibis Flour 10 KG</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <a href="#" class="btn">order now</a>
        </div>

        </div>
      </div>
</section> */
}

export default Book;
