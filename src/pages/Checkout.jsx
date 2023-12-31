import React, { useState } from "react";

function Checkout() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("curbside");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here, e.g., send data to server or perform validation
  };

  return (
    <section className="checkout__container">
      <h1 className="heading">
         <span className="red">Checkout</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="check">
          <input
            placeholder="Full Name"
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="check">
          <input
            placeholder="Phone Number"
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="check">
          <input
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Delivery Method</label>
          <div>
            <label>
              <input
                type="radio"
                name="deliveryMethod"
                value="curbside"
                checked={deliveryMethod === "curbside"}
                onChange={() => setDeliveryMethod("curbside")}
              />
              Curbside Pickup
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="deliveryMethod"
                value="delivery"
                checked={deliveryMethod === "delivery"}
                onChange={() => setDeliveryMethod("delivery")}
              />
              Delivery
            </label>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Checkout;
