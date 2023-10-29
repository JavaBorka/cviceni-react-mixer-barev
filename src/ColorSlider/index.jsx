import './index.css'

const ColorSlider = ({colorName, baseColor, onValueChange}) => {

    return (
        <>
            <label htmlFor={baseColor}>{colorName}</label>
            <input
            type="range"
            className={`slider slider--${baseColor}`}
            id={`${baseColor}Slider`}
            min="0"
            max="255"
            onChange={(e) => {
                onValueChange(e.target.value)
            }}
            />
        </>
    )
} 

export default ColorSlider