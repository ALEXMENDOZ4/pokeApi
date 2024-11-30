import styled from "styled-components";

export const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;

  span{
    font-size: 1.2rem;
    color: #34495e;
  }
`;

  
export const TypeBadge = styled.span`
  background-color: #d3d3d3;
  color: #34495e;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  text-transform: capitalize;
  min-width: 80px;
  text-align: center;

  &.fire {
    background-color: #e74c3c;
  }

  &.water {
    background-color: #3498db;
  }

  &.grass {
    background-color: #2ecc71;
  }

  &.electric {
    background-color: #f1c40f;
  }
  
`;