import React, { useState } from "react";
import Book from "../components/ui/Book";

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  function filterBooks(filter) {
    console.log(filter);
    if (filter === "LOW_TO_HIGH") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    } else if (filter === "HIGH_TO_LOW") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    } else if (filter === "RATING") {
      setBooks(books.slice().sort((a, b) => b.rating - a.rating));
    }
  }
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h1 className="heading">
                  All <span className="red">Items</span>
                </h1>
                <select
                  defaultValue="Default"
                  id="filter"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="Default" disabled>
                    Categories
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="box-container">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
