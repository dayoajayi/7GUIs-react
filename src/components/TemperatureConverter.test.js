import React from "react";
import {fireEvent, getByLabelText, render, screen} from "@testing-library/react"
import TemperatureConverter from './TemperatureConverter'

test("it should render two empty input fields",  () => {
    render(<TemperatureConverter />);

    const celciusInputForm = screen.getByLabelText('Celcius', {selector: 'input'});
    const fahrenheitInputForm = screen.getByLabelText('Fahrenheit', {selector: 'input'});

    expect(celciusInputForm.value).toBe('');
    expect(fahrenheitInputForm.value).toBe('');
});

test("entering a number in the celcius input should display the correct conversion in the fahrenheit input", () => {
    render(<TemperatureConverter/>);

    const celciusInputForm = screen.getByLabelText('Celcius', {selector: 'input'});
    fireEvent.change(celciusInputForm, {target:{value: '100'}})

    const fahrenheitInputForm = screen.getByLabelText('Fahrenheit', {selector: 'input'});
    expect(fahrenheitInputForm.value).toBe("212.00");

});