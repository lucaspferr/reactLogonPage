import React from 'react'
import img from "./images/imagemfull.png";
import { BackgroundImage, BackgroundImageContainer } from './styles';


const ImageBackground = () => {
  return (
    <BackgroundImageContainer>
        <BackgroundImage src={img} label='imgbg'/>
    </BackgroundImageContainer>
  );
}

export default ImageBackground;
