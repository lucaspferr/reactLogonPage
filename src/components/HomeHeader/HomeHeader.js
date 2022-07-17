import React from "react";
import Clock from "../Clock/Clock";
import Weather from "../Weather/Weather";
import logo from "./images/compassuol-logo-black.svg";
import { CompassLogo, Container, HomeHeaderContainer } from "./styles";

const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      <Container>
        <CompassLogo src={logo} />
      </Container>

      <Clock />
      <Container>
        <Weather />
      </Container>
    </HomeHeaderContainer>
  );
};

export default HomeHeader;
