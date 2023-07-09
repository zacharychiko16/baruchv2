import React from "react";
import logoImg from "../assets/Baruch-w-sand-removebg-preview.png";

const FeaturedBooks = () => {
  return (
    <section className="steps">
      <div className="row">
        <div className="steps">
          <div className="steps__img">
            <img src={logoImg} alt="" />
          </div>
          <div className="steps__list">
            <h1 className="step__head">
              <span class="red">Order</span> in Three
              <span class="red"> Easy</span> Steps
            </h1>
            <ul>
              <li>
                <div class="steps__main">
                  <div class="steps__number">
                    <h2>01</h2>
                  </div>
                  <div class="steps__description">
                    <h2>
                      <span class="red">Select Items</span>
                    </h2>
                    <p>
                      First, you need to select your favorite items from a
                      diverse range of options. Once you've made your
                      selections, it's time to proceed to the next step.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div class="steps__main">
                  <div class="steps__number">
                    <h2>03</h2>
                  </div>
                  <div class="steps__description">
                    <h2>
                      <span class="red">Enjoy</span>
                    </h2>
                    <p>
                      After completing the payment, all that's left to do is sit
                      back and enjoy your items. Whether you've opted for
                      <span class="red">delivery</span> or
                      <span class="red">curbside pick up</span> , your chosen
                      items will be made available to you.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div class="steps__main">
                  <div class="steps__number">
                    <h2>03</h2>
                  </div>
                  <div class="steps__description">
                    <h2>
                      <span class="red">Enjoy</span>
                    </h2>
                    <p>
                      After completing the payment, all that's left to do is sit
                      back and enjoy your items. Whether you've opted for
                      <span class="red">delivery</span> or
                      <span class="red">curbside pick up</span> , your chosen
                      items will be made available to you.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* <section class="steps">
      <div class="row">
        <div class="steps">
          <div class="steps__img">
            <img
              src="images/Baruch-w-sand-removebg-preview.png"
              alt="Steps Image"
            />
          </div>
          <div class="steps__list">
            <h1 class="step__head">
             
            </h1>

            <ul>
              <li>
                <div class="steps__main">
                  <div class="steps__number">
                    <h2>01</h2>
                  </div>
                  <div class="steps__description">
                    <h2><span class="red">Select Items</span></h2>
                    <p>
                      First, you need to select your favorite items from a
                      diverse range of options. Once you've made your
                      selections, it's time to proceed to the next step.
                    </p>
                  </div>

                  <li>
                    <div class="steps__main">
                      <div class="steps__number">
                        <h2>02</h2>
                      </div>
                      <div class="steps__description">
                        <h2><span class="red">Pay</span></h2>
                        <p>
                          The second step involves making your payment. You have
                          two convenient options: cash or debit card. You can
                          use cash or your debit card to pay upon delivery,
                          ensuring a hassle-free transaction.
                        </p>
                      </div>

                      <li>
                        <div class="steps__main">
                          <div class="steps__number">
                            <h2>03</h2>
                          </div>
                          <div class="steps__description">
                            <h2><span class="red">Enjoy</span></h2>
                            <p>
                              After completing the payment, all that's left to
                              do is sit back and enjoy your items. Whether
                              you've opted for
                              <span class="red">delivery</span> or
                              <span class="red">curbside pick up</span> , your
                              chosen items will be made available to you.
                            </p>
                          </div>
                        </div>
                      </li>
                    </div>
                  </li>
                </div>
             </div>
          </div>
   </section> */
}

export default FeaturedBooks;
