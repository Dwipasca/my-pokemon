import React from "react";

const Index = ({ name, img }) => {
  return (
    <div data-testid="list">
      <p>{name}</p>
      <img src={img} alt={name} style={{ width: "62px", height: "62px" }} />
    </div>
  );
};

export default Index;
