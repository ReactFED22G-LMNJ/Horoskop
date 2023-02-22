import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;