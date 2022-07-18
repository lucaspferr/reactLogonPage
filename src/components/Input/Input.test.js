import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
    test("must have 'Nome' written in it", () => {
        render(<Input id="name" placeholder="Nome"/>)})
});