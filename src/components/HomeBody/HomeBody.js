import React from "react";
import HomeImageBackground from "../ImagesAndIcons/HomeImageBackground";
import {
  BodyContainer,
  BodyDivImage,
  BodyDivText,
  HomeH1,
  HomeH2,
  HomeP,
} from "./styles";

const HomeBody = () => {
  return (
    <BodyContainer>
      <BodyDivImage>
        <HomeImageBackground />
      </BodyDivImage>
      <BodyDivText>
        <HomeH2>Our mission is</HomeH2>
        <HomeP>Nossa missão é</HomeP>
        <HomeH1>to transform the world</HomeH1>
        <HomeP>tranformar o mundo</HomeP>
        <HomeH1>building digital experiences</HomeH1>
        <HomeP>construindo experiências digitais</HomeP>
        <HomeH1>that enable our client's growth</HomeH1>
        <HomeP>que permitam o crescimento dos nossos clientes</HomeP>
      </BodyDivText>
    </BodyContainer>
  );
};

export default HomeBody;
