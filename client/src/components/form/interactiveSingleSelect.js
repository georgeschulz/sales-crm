function InteractiveSingleSelect({type, name, value, onChange, placeholder, handleClick, index, options}) {
    return (
        <select className="h-16 px-10 w-full bg-midDark text-bone focus:border-b-4 focus:outline-none focus:border-primary mb-12 pr-10" onChange={onChange}>
            {options.map((option, index) => {
                return (
                    <option key={index} value={option.value}>{option.label}</option>
                )
            })}
        </select>
    )
}

export default InteractiveSingleSelect;