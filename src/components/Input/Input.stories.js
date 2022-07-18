import React from "react";
import Input from "./Input";

export default {
    title: "Components/Input",
    component: Input,
    description: "Input component",
};

const Template = (args) => <Input {...args} />;

export const InputDefault = () => <Input />;

export const InputCustom = Template.bind({});