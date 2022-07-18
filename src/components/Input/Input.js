import React from "react";
import { ContainerForm, IconForm, InputForm } from "./styles";
import PropTypes from "prop-types";
import iconImg from "../Form/images/icon-user.svg";


const Input = ({ id, placeholder, icon, color, background, ...extraConfigs }) => {
  return (
    <ContainerForm style={color && background &&{color, background}} {...extraConfigs}>
      <InputForm placeholder={placeholder} style={color && {color}} id={id} {...extraConfigs} />
      <IconForm src={icon} />
    </ContainerForm>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  value: PropTypes.string,
}

Input.defaultProps = {
  color: '#E0E0E0',
  background: '#26292c',
  placeholder: ' Usuário',
  icon: iconImg,
};



export default Input;
