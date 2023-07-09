import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

const Discounted = () => {
  return (
    <section className="popular" id="popular">
      <h1 className="heading">
        Popular <span className="red">Items</span>
      </h1>
        <div className="box-container">
          {books
          .filter((book) => book.rating > 4)
          .slice(0, 6)
          .map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </div>
    </section>
  );
};

export default Discounted;


// import React from "react";
// import { books } from "../data";
// import Book from "./ui/Book";

// const Discounted = () => {
//   return (
//     <section class="popular" id="popular">
//       <h1 className="heading">
//         Popular <span className="red">Items</span>
//       </h1>
//       <div className="box">
//           <div className="books">
//             {books
//               .filter((book) => book.rating > 4)
//               .slice(0, 4)
//               .map((book) => (
//                 <Book book={book} key={book.id} />
//               ))}
//           </div>
//       </div>
//     </section>
//   );
// };
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


