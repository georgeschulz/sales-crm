import { TextField } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

function InputText({name, label, type = "text", state = "", setState, helpText, size = "medium", required = false, className=""}) {
    let styles = "";
    
    switch(size) {
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