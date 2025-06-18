import React from 'react'
import useFetch from '../CustomHooks/useFetch'

const CustomEx = () => {
   const data =  useFetch('https://jsonplaceholder.typicode.com/users')
   
  return (
    <div>
        {data && data.map((item, index) => (
            <p key={index} >{item.name}</p>

        ))}
        
        
    </div>
  )
}

export default CustomEx