import React from 'react';

export function Counter1(props) {
    const [count, setCount] = React.useState(1)

    console.log("RERENDER! current count is", count)

    let a = 1

    return (
        <div 
            onClick={() => {
                setCount(count + 1)
                a = a + 1
            }}
        >
            { count }
            <p>{ a }</p>   
        </div>

    )
}
