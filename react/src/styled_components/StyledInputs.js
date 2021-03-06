import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  background: transparent;
  border-radius: 0;
  border: none;
  border-bottom: 2px solid grey;
  color: black;
  font-weight: 500;
  font-size: 1em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-variant: small-caps;
  margin: 8px;
  padding: 5px;
  text-align: center;

  &::placeholder {
    text-align: center;
  }

  &:focus,
  &:active,
  &:hover {
    outline: none;
  }
`;
