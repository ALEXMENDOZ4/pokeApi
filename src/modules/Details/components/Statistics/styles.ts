import styled from "styled-components";

export const StatList = styled.ul`
  list-style: none;
  margin: 2rem 0;

  li {
    background-color: #f5f5f5;
    margin: 5px 0;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition: all ease-in-out 0.2s;
    position: relative;
    cursor: pointer;

    &:hover {
      background-color: #2980b9;
      transform: translateY(-5px);
      color: white;

      strong {
        color: white;
      }
    }
  }

  strong {
    transition: all ease-in-out 0.2s;
    font-weight: bold;
    color: #2980b9;
  }
`;