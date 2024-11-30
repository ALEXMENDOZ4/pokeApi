import styled from "styled-components";

interface Ihome{
  $length: boolean;
}

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContainerSearch = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  margin: 1rem auto;
  gap: 1rem;
  margin-bottom: 1rem;
`;


export const NotData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;

  h1{
    font-size: 2rem;
    color: #2c3e50;
    transition: all ease-in-out .2s;

    &:hover{
    opacity: .5;
    }
  }    
`;


export const CardContainer = styled.div<Ihome>`
  display: grid;
  grid-template-columns: ${({ $length }) => !$length ? "repeat(auto-fill, minmax(200px, 1fr))" : null};
  height: 700px;
  align-items: center;
  gap: 2rem;
  overflow: auto; 
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 1268px) {
    padding: 1rem;
  }
`;