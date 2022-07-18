import React from "react";
import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    description: "Button component",
};

const Template = (args) => <Button {...args} />;

export const ButtonCustom = Template.bind({});

export const ButtonDefault = () => <Button />;
