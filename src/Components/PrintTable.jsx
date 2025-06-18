import React from 'react'

const PrintTable = ({calculations}) => {
    
    
  return (
    <>
    <div>
        {
            calculations().map((item, index) =>  (
                <p key={index} >{item}</p>
            ))
        }
    </div>
    </>
  )
}

export default PrintTable