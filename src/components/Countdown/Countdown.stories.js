import { CounterContainer, CounterText, CounterTimer, Seconds } from "./styles";

function Countdown() {
  return (
    <CounterContainer
      style={{
        background: "linear-gradient(90.16deg,#33383D 0%,#1C1D20 100%)",
      }}
    >
      <CounterText>
        Application
        <br />
        refresh in
      </CounterText>
      <CounterTimer style={{ marginTop: "10px" }}>600</CounterTimer>
      <Seconds>seconds</Seconds>
    </CounterContainer>
  );
}

export default {
  title: "Components/Countdown",
  component: Countdown,
};


export const CountdownExample = () => {
  return <Countdown />;
};