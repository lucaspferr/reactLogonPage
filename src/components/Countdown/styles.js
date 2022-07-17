import styled from "styled-components";

export const CounterContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100px;
    width: 200px;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: white;
    font-family: 'Poppins', sans-serif;
    padding-right: 30px;
    padding-left: 30px;
    @media (max-width: 768px) {
        display: none;
    }
    `;

export const CounterText = styled.h2`
    font-size: 14px;
    font-weight: 400;
`;

export const CounterTimer =  styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    font-weight: 700;
    margin: 0;
    `;

export const Seconds = styled.h2`
    font-size: 14px;
    font-weight: 400;
    line-height: 10px;
    padding-bottom: 12px;
    margin: 0;
    `;