import React, { useState, useMemo } from 'react'

const MemoEx = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    // const calculations = heavyCode(number);

    const memeoCalculations = useMemo(() => {
        return heavyCode(number);

    }, [number])

    const cssCode = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    return (
        <>
            <div style={cssCode}  >
                <h1>Memo</h1>
                <input type="number" onChange={(e) => setNumber(e.target.valueAsNumber)} value={number} className='text-2xl  text-black-600 border-2' />
                <h3> number: {memeoCalculations} </h3>
                {/* <h3> number: {Calculations} </h3> */}

                <br />
                <button onClick={(e) => setDark(!dark)} className='border-2 p-1 m-1 rounded-md bg-green-500' >Toogle</button>
            </div>
        </>
    )
}

function heavyCode(num) {
    console.log('heavy code excution starts')
    for (let i = 0; i < 100000; i++) { }
    return num;
}

export default MemoEx