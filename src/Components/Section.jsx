import { useState } from "react";
import { useEffect } from "react";

function Section() {
    const [inputValue, setInputValue] = useState(0); 
    console.log(inputValue)


    const increase = () => {
        setInputValue(inputValue + 1);
    }

    const decrease = () => {
        setInputValue(inputValue - 1);
    }

    // useEffect(() => {
    //     console.log('mounting');
    // }, [])

    // useEffect(() => {
    //     console.log("updating")
     
    // }, [inputValue])

    // useEffect(() => {
    
    //   return () => {
    //     console.log("unmounting")
    //   }
    // }, [])
    
    
    



    return (
        <>
            <div>this is Section</div>
            <input readOnly value={inputValue} className="text-2xl  text-black-600 border-2 " type="number" placeholder="Write you name" /> <br /> <br />
            <button onClick={increase} className="border-2 p-1 m-1 rounded-md bg-green-500 " >ADDITION</button>
            <button onClick={decrease} className="border-2 p-1 m-1 rounded-md bg-green-500" >SUBTRACT</button>

        </>
    )
}



export default Section
