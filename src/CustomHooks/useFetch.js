import React, { useEffect, useState } from 'react'

const useFetch = (api) => {
     const [data, setData] = useState([]);
    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => setData(data))

    }, [])

  return (
    data

)
}

export default useFetch