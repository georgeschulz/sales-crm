function InputSelect({ name, label, state, setState, helpText, size = "medium", required = false, className = "", options = [] }) {
    let styles = "";

    switch (size) {
        case "large":
            styles = "h-16 px-10 w-full bg-midDark text-bone border-b-4 border-primary focus:outline-none focus:border-primary mb-12";
            break;
        case "medium":
            styles = "h-12 px-10 w-full bg-midDark text-bone border-b-4 border-primary focus:outline-none focus:border-primary mb-4";
            break;
        case "small":
            styles = "h-8 px-10 w-full bg-midDark text-bone border-b-4 border-primary focus:outline-none focus:border-primary mb-12";
            break;
    }

    styles += ` ${className}`;

    return (
        <div className="w-full">
            {size != 'large' && <label className="text-white">{label}</label>}
            <div className="control">
                <select
                    className={`input ${styles}`}
                    name={name}
                    value={state}
                    onChange={e => setState(e.target.value)}
                    required={required}
                    placeholder={helpText}
                >
                    {options.map((option, index) => {
                        return <option key={index} value={option.value}>{option.label}</option>
                    }
                    )}
                </select>
            </div>
        </div>
    )
}

export default InputSelect;