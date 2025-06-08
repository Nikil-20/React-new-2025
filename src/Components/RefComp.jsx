import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

const RefComp = () => {
    const [name, setName] = useState("");
    const count = useRef(0);
    const inputEle = useRef();
    console.log(count.current);

    const handleClick = () => {
        console.log(inputEle.current);
        inputEle.current.style.backgroundColor = "yellow"
        inputEle.current.style.width = "300px"
        inputEle.current.focus();

    }

    useEffect(() => {
        count.current = count.current + 1;

    })
    return (
        <div>
            <input className='border-2' type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
            <h3>Render Count : {count.current} </h3>
            <br /> <br />

            <input type="text" ref={inputEle} className='border-2' />
            <button onClick={handleClick} className='border-2 text-blue-700    '     >Click Me</button>

        </div>
    )
}

export default RefComp;