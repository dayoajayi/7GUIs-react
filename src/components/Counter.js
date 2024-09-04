import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState( 0);
    const add = () => {
        setCount(count + 1);
    };
    
    return (<div>
                <h1>Awesome Counter</h1>
                <span>{count}</span>
                <button onClick={add}>Add</button>
            </div>
    );
};

export default Counter;