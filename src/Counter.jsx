import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(1);
    const [backgroundColor, setBackgroundColor] = useState("white");

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const colorChange = () => {
        const colors = ["red", "green", "blue", "yellow", "purple"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBackgroundColor(randomColor);
    }

    return (
        <>
            <h1 style={{ backgroundColor: backgroundColor }}>Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={colorChange}>color</button>
        </>
    );
}

export default Counter