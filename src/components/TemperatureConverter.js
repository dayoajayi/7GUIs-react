import {useState} from "react";

const TemperatureConverter = () => {

    const [celcius, setCelcius] = useState("")
    const [fahrenheit, setFahrenheit] = useState("")

    const handleCelcius = (e) => {
        const celciusValue = e.target.value;
        setCelcius(celciusValue);
        if (celciusValue === "") {
            setFahrenheit("");
        } else {
            const fValue= parseFloat(celciusValue * (9 / 5) + 32);
            setFahrenheit(fValue.toFixed(2));
        }
    };

    const handleFahrenheit = (e) => {
        const fahrenheitValue = e.target.value;
        setFahrenheit(fahrenheitValue);
        if (fahrenheit === "") {
            setCelcius("");
        } else {
            const cValue = parseFloat((fahrenheitValue - 32) * 5 / 9);
            setCelcius(cValue.toFixed(2));
        }
    }

    return (<div>
        <form>
            <div>
                <label htmlFor="celcius">Celcius</label>
                <input
                    id="celcius"
                    type="number"
                    value={celcius}
                    onChange={handleCelcius}
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