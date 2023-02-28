import React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children}: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

//-------------Styling-------------//

const StyledButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e6e6e6;
  }
`;


