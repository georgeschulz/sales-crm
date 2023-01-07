import '../../assets/check.png'

function InputCheckbox({ state, setState, name, label, className = "" }) {
    return (
        <div>
            <label className="text-white w-full block mb-2">{label}</label>
            <input
                type="checkbox"
                className={`form-checkbox h-10 w-10 bg-dark accent-primary ${className}`}
                checked={state}
                onChange={e => setState(e.target.checked)}
                name={name}
            />
        </div>
    )
}

export default InputCheckbox;