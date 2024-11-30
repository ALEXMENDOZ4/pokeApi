import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 140px;
  overflow: hidden;
  text-align: center;
  transition: all ease-in-out .2s;
  cursor: pointer;
  padding: .5rem;
  
  &:hover {
    transform: translateY(-5px);
  }
`;