import React from "react";
import { CounterStorage } from "../../components/Countdown/CounterContext";
import HomeBody from "../../components/HomeBody/HomeBody";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

const HomePage = () => {

  React.useEffect(() => {
    document.title = "Compass - Home";
  });
  return (
    <React.Fragment>
      <CounterStorage>
        <HomeHeader />
        <HomeBody />
        <HomeFooter />
      </CounterStorage>
    </React.Fragment>
  );
};

export default HomePage;
