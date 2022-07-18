import React from "react";
import Clock from "./Clock";

export default {
    title: "Components/Clock",
    component: Clock,
};

const Template = (args) => <Clock {...args} />;


// export const ClockExample = () => {
//     return <Clock />;
// }

export const ClockDefault = () => <Clock />;

export const ClockChangeColor = Template.bind({});
