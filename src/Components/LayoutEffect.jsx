import React, { useEffect, useLayoutEffect } from 'react'

const LayoutEffect = () => {

    useEffect(() => {
        console.log('use Efefct Hook is called')
    }, []);

    useLayoutEffect(() => {
        console.log('useLayoutEffect Hook is called')
    }, [])




  return (
    <div>LayoutEffect</div>
  )
}

export default LayoutEffect