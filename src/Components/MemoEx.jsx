import React, { useState } from 'react'

const MemoEx = () => {
    const [number, setNumber] = useState(0);
    const calculations = heavyCode(number);
  return (
    <>
    <h1>Memo</h1>
    <input type="number"  onChange={(e) => setNumber(e.target.valueAsNumber)} value={number}  />
    <h3> number: {calculations} </h3>    
    </>
  )
}

function heavyCode(num){
    console.log('heavy code excution starts')
    for (let i=0; i<100000; i++) {}
    return num;
}

export default MemoEx