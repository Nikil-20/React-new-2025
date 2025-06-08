import { useState } from "react"


const Conditional = () => {
    const [show, setShow] = useState(true)

    function setMesasge(){
        if(show){
            return <p>this is if para</p>
        } else{
            <p>this is else para</p>
        }
    }

    return (
        <>
            <div> 1. ternary
                2. logical and operator
                3.if else rendring
                4. switch case rendring
            </div>



            
            {(show) ? <p>this is test para </p> : ''}

            {show && (
                <p>thi is logical </p>
                
            )}
            {setMesasge()}
        </>
    )
}

export default Conditional;