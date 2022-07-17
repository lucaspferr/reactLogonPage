import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
    test("must have 'Continuar' written in it", () => {
        render(<Button />);
        const buttonText = screen.getByText("Continuar");
        expect(buttonText).toBeInTheDocument();
    })
});