import {fireEvent, render, screen} from "@testing-library/react"
import Counter from "./Counter";

test("it should have a default initial value of 0", () => {
    render(<Counter />);
    const count = screen.queryByText('0');
    expect(count).toBeVisible();
});

test("it should increase the value correctly when button is clicked once", () => {
    render(<Counter  />);
    const addButton = screen.getByText("Add");
    // userEvent.click(addButton);
    fireEvent.click(addButton);
    const count = screen.queryByText(1);
    expect(count).toBeVisible();
});

test("it should increase the value correctly when button is clicked twice", () => {
    render(<Counter />);
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const count = screen.queryByText(2);
    expect(count).toBeVisible();
});

test("it should reset the value to zero when clickec", () => {
    render(<Counter />);
    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

