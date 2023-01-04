function InputText({name, label, type = "text", state = "", setState, helpText, size = "medium", required = false}) {
    let styles = "";
    
    switch(size) {
        case "large":
            styles = "h-16 px-10 w-full bg-midDark text-bone border-b-4 border-primary focus:outline-none focus:border-primary mb-12";
    }
    
    return (
        <div className="w-full">
            {size != 'large' && <label className="text-white">{label}</label> }
            <div className="control">
                <input
                    className={`input ${styles}`}
                    type={type}
                    name={name}
                    value={state}
                    onChange={e => setState(e.target.value)}
                    required={required}
                    placeholder={helpText}
                />
            </div>
        </div>
    );
}

export default InputText;