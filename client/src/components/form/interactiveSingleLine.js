function InteractiveSingleLine({type, name, value, onChange, placeholder, handleClick, index}) {
    return (
        <input
          className="h-16 px-10 w-full bg-midDark text-bone focus:border-b-4 focus:outline-none focus:border-primary mb-12"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          id={'input-' + index}
          onClick={handleClick}
        />
    )
}

export default InteractiveSingleLine;