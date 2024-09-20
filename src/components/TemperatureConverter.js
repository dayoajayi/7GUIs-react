import {useState} from "react";

const TemperatureConverter = () => {

    const [celsius, setCelsius] = useState("")
    const [fahrenheit, setFahrenheit] = useState("")

    const handleCelsius = (e) => {
        const celsiusValue = e.target.value;
        setCelsius(celsiusValue);
        if (celsiusValue === "") {
            setFahrenheit("");
        } else {
            const fValue= parseFloat(celsiusValue * (9 / 5) + 32);
            setFahrenheit(fValue.toFixed(2));
         }
    };

    const handleFahrenheit = (e) => {
        const fahrenheitValue = e.target.value;
        setFahrenheit(fahrenheitValue);
        if (fahrenheitValue === "") {
            setCelsius("");
        } else {
            const cValue = parseFloat((fahrenheitValue - 32) * 5 / 9);
            setCelsius(cValue.toFixed(2));
        }
    }

    return (<div>
        <form>
            <div>
                <label htmlFor="celsius">Celsius</label>
                <input
                    id="celsius"
                    type="number"
                    value= {celsius}
                    onChange={handleCelsius}
                />
            </div>

            <div>
                <label htmlFor="fahrenheit">Fahrenheit</label>
                <input
                    id="fahrenheit"
                    type="number"
                    value={fahrenheit}
                    onChange={handleFahrenheit}
                />
            </div>
        </form>
    </div>);
};

export default TemperatureConverter;