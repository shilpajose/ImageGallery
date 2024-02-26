import { useState } from 'react'
import './App.css'
import ParallaxEffect from './Components/ParallaxEffect'
import ImageSliderr from './Components/ImageSlider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParallaxEffect/>
      {/* <ImageSlider/> */}
      <ImageSliderr/>
    </>
  )
}

export default App
