import React from "react";
import { CounterContext } from "./CounterContext";
import { CounterContainer, CounterText, CounterTimer, Seconds } from "./styles";

const Countdown = () => {
  const newCounter = React.useContext(CounterContext);

  return (
    <React.Fragment>
      <CounterContainer>
        <CounterText>
          Application
          <br />
          refresh in
        </CounterText>
        <CounterTimer>{newCounter.counter}</CounterTimer>
        <Seconds>seconds</Seconds>
      </CounterContainer>
    </React.Fragment>
  );
};

export default Countdown;
