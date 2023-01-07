import { useState, useEffect } from "react"
import InteractiveFormInput from "./interactiveFormInput"

function InteractiveForm({ formElements, onSubmit, onReset }) {
  const [position, setPosition] = useState(0)

  const advancePosition = () => {
    if (position < formElements.length - 1) {
      setPosition(position + 1)
    }
  }

  const regressPosition = () => {
    if (position > 0) {
      setPosition(position - 1)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit()
    onReset()
  }

  const zoomToInput = (index) => {
    const input = document.getElementById('input-' + index)
    input.focus();
    input.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  useEffect(() => {
    zoomToInput(position)
  }, [position])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      advancePosition()
    }

    if (event.key == 'Tab') {
      event.preventDefault()
      advancePosition()
    }
    if (event.key === 'ArrowRight') advancePosition()
    if (event.key === 'ArrowDown') advancePosition()
    if (event.key === 'ArrowUp') regressPosition()
    if (event.key === 'ArrowLeft') regressPosition()

  }

  const handleInputClick = (index) => {
    setPosition(index)
  }

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: '1000px', width: '100%' }} onKeyDown={(e) => handleKeyDown(e)}>
      { formElements.map((element, index) => {
        return (
          <InteractiveFormInput
            key={element.name}
            type={element.type}
            name={element.name}
            value={element.value}
            onChange={element.onChange}
            placeholder={element.placeholder}
            advancePosition={advancePosition}
            regressPosition={regressPosition}
            position={position}
            index={index}
            isFocused={index === position}
            handleClick={() => handleInputClick(index)}
            options={element.options}
          />
        )
       } 
      )}
     <button type="submit" className="bg-primary px-8 py-2 text-xl">Submit</button>
    </form>
  )
}

export default InteractiveForm;