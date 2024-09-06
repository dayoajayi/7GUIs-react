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