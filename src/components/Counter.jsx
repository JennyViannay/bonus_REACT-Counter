import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    return(
        <div className="">
            {count}
            <input type="button" value="-1" onClick={() => { setCount(count - 1) }}/>
            <input type="button" value="+1" onClick={() => { setCount(count + 1) }}/>
        </div>
    )
}

export default Counter;