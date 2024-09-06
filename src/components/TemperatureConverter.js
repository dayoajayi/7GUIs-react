const TemperatureConverter = () => {

    const {celcius} = ''
    const {fahrenheit} = ''

    return (<div>
        <form>
            <div>
                <label htmlFor="celcius">Celcius</label>
                <input
                    id="celcius"
                    type="number"
                    value={celcius}
                />
            </div>

            <div>
                <label htmlFor="fahrenheit">Fahrenheit</label>
                <input
                    id="fahrenheit"
                    type="number"
                    value={fahrenheit}
                />
            </div>
        </form>
    </div>);
};

export default TemperatureConverter;