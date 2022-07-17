import styled from "styled-components";

export const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    color: #222222;
    @media (max-width: 768px) {
        display: none;
    }
    `;

export const ClockTime = styled.h1`
    font-size: 120px;
    font-weight: 700;
    line-height: 110px;
    margin: 0;
    text-align: center;
    `;

export const ClockDate = styled.p`
    font-size: 14px;
    line-height: 12px;
    font-weight: 400;
    margin: 0;
    text-align: center;
    `;