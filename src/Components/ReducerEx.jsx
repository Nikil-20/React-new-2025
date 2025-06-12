import React, { useReducer } from 'react'

const initialState = {count: 0}

const ReducerEx = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "increased":
                return {count: state.count + 1};
            case "decreased":
                return {count: state.count - 1};
            default :
            return state;
        }

    }

   const [state, dispatch] =  useReducer(reducer, initialState);


    const increased = () => {
        dispatch({type : "increased"})
    }

    const decreased = () => {
        dispatch({type: "decreased"})
    }

    return (
        <>
            <div>

                <label htmlFor="" > {state.count} </label> <br />
                <button onClick={increased} className='border-2 p-1 m-1 rounded-md bg-green-500'  >increase</button>
                <button onClick={decreased}  className='border-2 p-1 m-1 rounded-md bg-green-500'  >decrease</button>
            </div>
        </>
    )
}






export default ReducerEx;

