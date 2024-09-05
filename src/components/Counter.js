import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState( 0);
    const add = () => {
        setCount(count + 1);
    };
    const reset = () => {
        setCount(() => {
            return 0;
        });
    };
    
    return (<div>
                <h1>Awesome Counter</h1>
                <span>{count}</span>
                <button onClick={add}>Add</button>
                <button onClick={reset}>Reset</button>
            </div>
    );
};

export default Counter;