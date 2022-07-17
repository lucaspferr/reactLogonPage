import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Clock from "./Clock";

const days = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

describe("Clock component", () => {
    test("must start with the value 00:00 and 'carregando'", () => {
        render(<Clock />);
        const clockText = screen.getByText("00:00");
        const dateText = screen.getByText("Loading...");
        expect(clockText).toBeInTheDocument();
        expect(dateText).toBeInTheDocument();
    });  
    test("must show actual time and date", () => {
        jest.useFakeTimers();
        render(<Clock />);

        act(() => {
            jest.advanceTimersByTime(1000);
        })
        const date = new Date();
        const clockText = screen.getByText((date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()));
        const dateText = screen.getByText((days[date.getDay()]) + ", " + (date.getDate()) + " de " + (months[date.getMonth()]) + " de " + (date.getFullYear()));
        expect(clockText).toBeInTheDocument();
        expect(dateText).toBeInTheDocument();
    });    
});