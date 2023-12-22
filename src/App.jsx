import { useState } from 'react'
import ColorButtons from './components/colorButtons'


function App() {

  const [color,setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200 'style={{backgroundColor:color}}>

      <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2 bg'>


      <div className='bg-white flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl'>
       <ColorButtons color="Red" reff = {setColor}/>
       <ColorButtons color="Blue" reff = {setColor}/>
       <ColorButtons color="Black" reff = {setColor}/>
       <ColorButtons color="Orange" reff = {setColor}/>
       <ColorButtons color="Cyan" reff = {setColor}/>
       <ColorButtons color="Green" reff = {setColor}/>
       <ColorButtons color="Pink" reff = {setColor}/>
       <ColorButtons color="gold" reff = {setColor}/>
       <ColorButtons color="brown" reff = {setColor}/>
       <ColorButtons color="Violet" reff = {setColor}/>


      </div>


      </div>
    </div>

  )
}

export default App
