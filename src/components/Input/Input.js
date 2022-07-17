import React from "react";
import { ContainerForm, IconForm, InputForm } from "./styles";

const Input = ({ id, placeholder, icon, ...extraConfigs }) => {
  return (
    <ContainerForm {...extraConfigs}>
      <InputForm placeholder={placeholder} id={id} {...extraConfigs} />
      <IconForm src={icon} />
    </ContainerForm>
  );
};

export default Input;
