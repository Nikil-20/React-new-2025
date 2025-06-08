import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

const RefComp = () => {
    const [name, setName] = useState("");
    const count = useRef(0);
    console.log(count.current);

    useEffect(() => {
        count.current = count.current + 1;
     
    })
    return (
        <div>
            <input className='border-2' type="text" placeholder='Enter Your Name' onChange={(e) =>  setName(e.target.value) } />
            <h3>Render Count : {count.current} </h3>
            <br /> <br />

        </div>
    )
}

export default RefComp;