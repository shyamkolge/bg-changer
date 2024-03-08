import React from 'react'

const CustomeButton = ({color , setColor}) => {
      
    return (
        <button onClick={()=>{setColor(color)}} className='mx-3 outline-none py-2 px-4 rounded-full text-black text-base font-semibold' style={{backgroundColor : color}}>{color.toUpperCase()}</button>
    )
}

export default CustomeButton