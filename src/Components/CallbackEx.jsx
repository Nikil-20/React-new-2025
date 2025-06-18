import React, { useCallback, useState } from 'react'
import PrintTable from './PrintTable';

const CallbackEx = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    const cssCode = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    const calculations =  useCallback(() => {
        return [number * 1, number * 2, number *3, number * 4, number * 5 ];
    }, [number])


    return (
        <>
            <div style={cssCode}>
                <h1>Callback Functions</h1>
                <input type="number" onChange={(e) => setNumber(e.target.valueAsNumber)} value={number} className='text-2xl text-black-400 border-2  ' />
                <PrintTable calculations={calculations} />
                <br /> <br />
                <button onClick={(e) => setDark(!dark)} className='border-2 p-1 m-1 rounded-md bg-green-500' >Toogle</button>

            </div>

        </>
    )
}

export default CallbackEx