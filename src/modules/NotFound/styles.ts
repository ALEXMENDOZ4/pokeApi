import styled from "styled-components";

export const NotFound = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;

    h1{
        font-size: 2rem;
        transition: all ease-in-out .2s;
        color: #2c3e50;

        &:hover{
            opacity: .5;
        }
    }

    img{
        height: 400px;
        width: 400px;
        max-width: 100%;
    }
`;