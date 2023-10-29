import ColorSlider from './ColorSlider'
import './App.css'

function App() {

  return (
    <>
      <div class="color-panel">
        <h1>Mixér barev</h1>
        <div class="sliders">
          <ColorSlider colorName="Červená" baseColor="red" />
          <ColorSlider colorName="Červená" baseColor="red" />
          <ColorSlider colorName="Červená" baseColor="red" />
        </div>
        <div class="color-box" id="color-box"></div>
      </div>
    </>
  )
}

export default App
