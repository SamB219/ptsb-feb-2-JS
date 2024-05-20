import React, { useState } from 'react';


const style = {
    fontSize: 45,
}


const Counter = () => {
const [count, setCount] = useState(0);

const add = () => {
    setCount(count + 1);
};

const subtract = () => {
    setCount(count - 1);
};

return (
<>
    <button onClick={add}> + </button>
    <button onClick={subtract}> - </button>
    <div>
    <span style={style}>{count}</span>
    </div>
</>
);
};

export default Counter;
