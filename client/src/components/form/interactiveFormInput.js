import InteractiveSingleSelect from "./interactiveSingleSelect";
import InteractiveSingleLine from "./interactiveSingleLine";

function InteractiveFormInput({ type, name, value, onChange, placeholder, handleClick, index, isFocused, options=[] }) {
  return (
    <div className={isFocused ? "opacity-100" : "opacity-50"}>
      <label className="text-white text-lg font-semibold">{placeholder}</label>
      {type === 'text' && (
        <InteractiveSingleLine
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          index={index}
        />
      )}
      {type === 'singleSelect' && (
        <div>
          <InteractiveSingleSelect
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            index={index}
            options={options}
          />
        </div>
      )}
    </div>
  );
}

export default InteractiveFormInput;
