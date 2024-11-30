import styled from "styled-components";

export const Paginacion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin: 2rem 0 1rem 0;

  > div button{
    display: flex;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    border: 1px solid #ccc;
    pointer-events: none;
  }
`;