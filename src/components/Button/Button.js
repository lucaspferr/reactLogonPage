import React from 'react'
import { Submit } from './styles';
import PropTypes from "prop-types";


const Button = ({color, background, value, ...props}) => {
  return (
    <Submit type='submit' style={color && background && {color,background}}>{value}</Submit>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  value: PropTypes.string,
}

Button.defaultProps = {
  color: '#fff',
  background: 'linear-gradient(#FF2D04 0%, #C13216 100%)',
  value: 'Continuar',
}

export default Button;