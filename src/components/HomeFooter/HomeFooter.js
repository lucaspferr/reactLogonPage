import React from "react";
import Countdown from "../Countdown/Countdown";
import { CounterContext } from "../Countdown/CounterContext";
import {
  HomeFooterButtonKeep,
  HomeFooterButtonLog,
  HomeFooterButtonContainer,
  HomeFooterContainer,
  HomeFooterText,
} from "./styles";

const HomeFooter = () => {
  const counter = React.useContext(CounterContext);

  return (
    <HomeFooterContainer>
      <HomeFooterText>
        Essa janela do navegador é usada para manter sua sessão de autenticação
        ativa.
        <br />
        Deixe-a aberta em segundo plano e abra uma nova janela para continuar a
        navegar.
      </HomeFooterText>
      <Countdown />
      <HomeFooterButtonContainer>
        <HomeFooterButtonKeep
          type="button"
          onClick={() => counter.setCounter(600)}
        >
          Continuar Navegando
        </HomeFooterButtonKeep>
        <HomeFooterButtonLog
          type="button"
          onClick={() => counter.setCounter(0)}
        >
          Logout
        </HomeFooterButtonLog>
      </HomeFooterButtonContainer>
    </HomeFooterContainer>
  );
};

export default HomeFooter;
