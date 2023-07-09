import React from "react";

const Information = () => {
  return (

    <>
    <section class="review" id="find">
      <h1 class="heading">Store <span class="red">Information</span>!</h1>

      <div class="box-container">
        <div class="box">
          <h3>Get Directions</h3>
          <p>#1 Storebay Local Road, Bon Accord, Tobago</p>
          <div class="map-buttons">
            <a
              href="https://maps.google.com/maps?q=Baruch+Wholesale+and+Retail,+Storebay+Local+Road,+Tobago"
              target="_blank"
              class="btn"
              >Google Maps</a
            >
            <a
              href="https://ul.waze.com/ul?ll=11.15691896%2C-60.81833839&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
              target="_blank"
              class="btn"
              >Waze</a
            >
          </div>
        </div>
        <div class="box">
          <h3>Contact us at</h3>
          <p>1 (868) 354-6617 or 1 (868) 357-7793</p>
          <p>Email:</p>
        </div>
        <div class="box">
          <h3>Opening Hours</h3>
          <p>We are Open Everyday from 7AM to 10PM</p>
        </div>
      </div>
    </section>
    </>
    // <section id="highlights">
    //   <div className="container">
    //     <div className="row">
    //       <h2 className="section__title">
    //         Why choose <span className="purple">Library</span>?
    //       </h2>
    //       <div className="highlight__wrapper">
    //         <Highlight
    //           icon={<FontAwesomeIcon icon="bolt" />}
    //           title="Easy and Quick"
    //           paragraph="Get access to the book you prchased online instantly."
    //         />
    //         <Highlight
    //           icon={<FontAwesomeIcon icon="book-open" />}
    //           title="10,000+ Books"
    //           paragraph="Our Library has books in all your favourite categories."
    //         />
    //         <Highlight
    //           icon={<FontAwesomeIcon icon="tags" />}
    //           title="Affordable"
    //           paragraph="Get your hands on a book for as little as $10."
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Information;
