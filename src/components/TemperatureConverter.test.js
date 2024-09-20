import React from "react";
import {fireEvent, render, screen} from "@testing-library/react"
import TemperatureConverter from './TemperatureConverter'

test("it should render two empty input fields",  () => {
    render(<TemperatureConverter />);

    const celsiusInputForm = screen.getByLabelText('Celsius', {selector: 'input'});
    const fahrenheitInputForm = screen.getByLabelText('Fahrenheit', {selector: 'input'});

    expect(celsiusInputForm.value).toBe('');
    expect(fahrenheitInputForm.value).toBe('');
});

test("entering a number in the fahrenheit input should display the correct conversion in the celsius input", () => {
    render(<TemperatureConverter/>);

    const fahrenheitInputForm = screen.getByLabelText('Fahrenheit', {selector: 'input'});
    fireEvent.change(fahrenheitInputForm, {target:{value: '212'}})

    const celciusInputForm = screen.getByLabelText('Celsius', {selector: 'input'});
    expect(celciusInputForm.value).toBe("100.00");

});

test("entering a number in the celsius input should display the correct conversion in the fahrenheit input", () => {
    render(<TemperatureConverter/>);

    const celciusInputForm = screen.getByLabelText('Celsius', {selector: 'input'});
    fireEvent.change(celciusInputForm, {target:{value: '100'}})

    const fahrenheitInputForm = screen.getByLabelText('Fahrenheit', {selector: 'input'});
    expect(fahrenheitInputForm.value).toBe("212.00");

});

test("clearing out one field should clear out the other", () => {
   render (<TemperatureConverter />);

   // get both input fields
    const celsiusInputForm = screen.getByLabelText('Celsius', {selector: 'input'});
    const fahrenheitInputForm = screen.getByLabelText('Fahrenheit', {selector: 'input'});

   // simulate typing into Celsius input
   fireEvent.change(celsiusInputForm, {target:{value:'100'}});
   expect(fahrenheitInputForm.value).toBe('212.00');

   // simulate clearing the Celsius input
    fireEvent.change(celsiusInputForm, {target:{value:''}});

    // Assert that both fields are cleared
    expect(celsiusInputForm.value).toBe('');
    expect(fahrenheitInputForm.value).toBe('');

});


