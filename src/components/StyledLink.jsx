import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-block;

  text-decoration: none;
  color: #343a40;
  background: #f1f3f5;
  padding: 12px;

  :hover {
    background: #e9ecef;
  }
`;
