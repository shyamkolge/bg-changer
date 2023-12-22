import React from 'react'

function colorButtons({color,reff}) {


    return (
    <>
      <button onClick={()=>{reff(color)}} className="outline-none py-2 px-4 rounded-full text-white text-base font-semibold " style={{backgroundColor:color}}>{color}</button>
    </>
  )
}

export default colorButtons