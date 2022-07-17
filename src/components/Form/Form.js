import React from "react";
import usu_icon from "./images/icon-user.svg";
import sen_icon from "./images/icon-password.svg";
import {
  Div,
  DivExtern,
  DivIntern,
  InvalidText,
  InvalidTextContainer,
  Text,
  TitleForm,
} from "./styles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [form, setForm] = React.useState({ username: "", password: "" });
  const [borderColor, setBorderColor] = React.useState("#fff");
  const loggedin = useNavigate();
  let fakeToken = "";

  function handleSubmit(event) {
    event.preventDefault();
    if (form.username === "admin" && form.password === "admin") {
      fakeToken = "fakeToken";
      localStorage.setItem("token", fakeToken);
      console.log(localStorage.getItem("token"));
      loggedin("/home");
    } else {
      setBorderColor("#E9B425");
    }
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <React.Fragment>
      <DivExtern>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Div>
            <div>
              <Text>Olá,</Text>
              <Text style={{ fontSize: "14px" }}>
                Para continuar navegando de forma
                <br />
                segura, efetue o login na rede.
              </Text>
            </div>
            <DivIntern>
              <TitleForm>Login</TitleForm>
              <Input
                id="username"
                placeholder="Usuário"
                icon={usu_icon}
                value={form.username}
                border={borderColor}
                onChange={handleChange}
              />
              <Input
                id="password"
                placeholder="Senha"
                icon={sen_icon}
                type="password"
                value={form.password}
                border={borderColor}
                onChange={handleChange}
              />
              <InvalidTextContainer>
                {/* Ops, usuário ou senha inválidos.
                <br />
                Tente novamente! */}
                {borderColor === "#E9B425" && (
                  <InvalidText>
                    Ops, usuário ou senha inválidos.
                    <br />
                    Tente novamente!
                  </InvalidText>
                )}
              </InvalidTextContainer>
            </DivIntern>
            <Button />
          </Div>
        </form>
      </DivExtern>
    </React.Fragment>
  );
};

export default Form;
