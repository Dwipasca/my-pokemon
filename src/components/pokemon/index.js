import React from "react";

import { Link } from "react-router-dom";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  margin: 12px 32px;
  color: #ffffff;
  background-color: #3949ab;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const Index = ({ name, img }) => {
  return (
    <Link to={`/${name}/detail`}>
      <Wrapper data-testid="list">
        <img src={img} alt={name} style={{ width: "62px", height: "62px" }} />
        <p>{name}</p>
      </Wrapper>
    </Link>
  );
};

export default Index;
