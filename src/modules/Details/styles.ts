import styled from "styled-components";

export const Container = styled.div`
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    div.image{
        width: 300px;
        height: 140px;
    }
`;


export const Grid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;

    h2{
        color: #34495e;
        font-size: 1.5rem;
    }

    > div:first-child{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
    }
`;


export const ContainerButton = styled.div`
    width: 150px;
    margin: 2rem 0 1rem 0;
`;