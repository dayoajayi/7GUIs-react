import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TemperatureConverter from "./components/TemperatureConverter";

function App() {
    return (
        <div>
                <div>
                    <Counter/>
                </div>

                <div>
                    <TemperatureConverter />
                </div>
        </div>

    );
}

export default App;
