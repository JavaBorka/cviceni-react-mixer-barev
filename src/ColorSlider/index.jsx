import './index.css'

const ColorSlider = ({colorName, baseColor}) => {

    return (
        <>
            <label for={baseColor}>{colorName}</label>
            <input
            type="range"
            class={`slider slider--${baseColor}`}
            id={`${baseColor}Slider`}
            min="0"
            max="255"
            value="0"
            />
        </>
    )
} 

export default ColorSlider