import React from "react";

const Card = ({ children }) => {
  return (
    <section className="card_container">
      <div className="card">
        <h1>Testing</h1>
      </div>
      {children}
    </section>
  );
};

export default Card;
