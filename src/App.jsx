import ColorSlider from './ColorSlider'
import './App.css'
import { useState } from 'react'

function App() {
  const [redValue, setRedValue] = useState(0)
  const [greenValue, setGreenValue] = useState(0)
  const [blueValue, setBlueValue] = useState(0)

  const colorBoxStyle = {
    width: "200px",
    height: "200px",
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    border: "2px solid black",
    borderRadius: "50%",
    background: `rgb(${redValue}, ${greenValue}, ${blueValue})`
  }

  const handleRedChange = (value) => {
    setRedValue(value)
  }

  const handleGreenChange = (value) => {
    setGreenValue(value)
  }

  const handleBlueChange = (value) => {
    setBlueValue(value)
  }

  return (
    <>
      <div className="color-panel">
        <h1>Mixér barev</h1>
        <div className="sliders">
          <ColorSlider colorName="Červená" baseColor="red" onValueChange={handleRedChange} />
          <ColorSlider colorName="Zelená" baseColor="green" onValueChange={handleGreenChange} />
          <ColorSlider colorName="Modrá" baseColor="blue" onValueChange={handleBlueChange} />
        </div>
        <div style={colorBoxStyle} id="color-box"></div>
      </div>
    </>
  )
}

export default App
