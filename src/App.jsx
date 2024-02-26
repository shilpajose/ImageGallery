import { useState } from 'react'
import './App.css'
import ParallaxEffect from './Components/ParallaxEffect'
import ImageSliderr from './Components/ImageSlider'
import Parallax2 from './Components/Parallax2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParallaxEffect />
      <ImageSliderr />
      <Parallax2 />
    </>
  )
}

export default App
