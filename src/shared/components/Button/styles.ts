import styled from "styled-components";

interface IButtonProps {
    backgroundColor?: string; 
    textColor?: string;
    borderColor?: string;     
  }

export const Button = styled.button<IButtonProps>`
  width: 100%;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  padding: 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ borderColor }) => borderColor || "#2980b9"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#2980b9"};
  color: ${({ textColor }) => textColor || "white"};

  &:hover {
    background-color: transparent;
    border: 1px solid ${({ borderColor }) => borderColor || "#2980b9"};
    color: ${({ borderColor }) => borderColor || "#2980b9"};
  }
`;