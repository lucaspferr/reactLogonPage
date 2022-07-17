import styled from "styled-components";

export const WeatherContainer = styled.div`
    display: flex;
    align-items: flex-end;
    width: 150px;
    flex-wrap: wrap;
    font-family: 'Poppins', sans-serif;
    color: #222222;
    @media (max-width: 768px) {
        width: 30vw;
    }
`;

export const CityName = styled.h1`
    font-size: 14px;
    font-weight: 400;
    width: 150px;
    margin: 0;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 11px;
        width: 30vw;
    }
`;

export const Temperature = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 42px;
    margin: 0;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const IconWeather = styled.img`
    width: 50px;
    height: 50px;
    margin: 0;
    margin-right: 10px;
    display: block;
    @media (max-width: 768px) {
        width: 35px;
        height: 35px;
    }

`;