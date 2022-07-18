import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Countdown from "./Countdown";
import { CounterContext } from "./CounterContext";

describe("Countdown component", () => {
    test("must start at 600", () => {
        const addItem = jest.fn();
        render(<CounterContext.Provider value={{ counter: 600, setCounter: addItem }}><Countdown /></CounterContext.Provider>);
        const counterText = screen.getByText("600");
        expect(counterText).toBeInTheDocument();
    });
});