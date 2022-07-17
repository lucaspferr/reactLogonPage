import styled from "styled-components";

export const HomeHeaderContainer = styled.div`
    display: flex;
    padding: 3vh 2vw 0 2vw;
    justify-content: space-between;
    height: 22vh;
    top: 0;
    background: #E5E5E5;
`;

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: end;
    width: 250px;
    @media (max-width: 768px) {
        width: 50vw;
    }
`;

export const CompassLogo = styled.img`
    width: 250px;
    @media (max-width: 768px) {
        width: 50vw;
    }
`;