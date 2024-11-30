import styled from "styled-components";

export const Container = styled.div`
  img {
    height: 400px;
    width: 400px;
  }

  div.name {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    color: #34495e;
    margin: 1rem 0;
  }


  @media (max-width: 768px) {
    img{
      max-width: 100%;
    }
  }
`;