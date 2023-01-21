import InteractiveSingleSelect from "./interactiveSingleSelect";
import InteractiveSingleLine from "./interactiveSingleLine";
import InteractiveFormAddress from "./interactiveFormAddress";

function InteractiveFormInput({ type, name, value, onChange, placeholder, handleClick, index, isFocused, options=[], handlers={}, values={} }) {
  return (
    <div className={isFocused ? "opacity-100" : "opacity-50"} onClick={() => handleClick(index)}>
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
      {type === 'address' && (
        <div>
          <InteractiveFormAddress
            name={name}
            placeholder={placeholder}
            index={index}
            addressState={values.address}
            cityState={values.city}
            stateState={values.state}
            zipState={values.zip}
            setAddress={handlers.setAddress}
            setCity={handlers.setCity}
            setStateName={handlers.setStateName}
            setZip={handlers.setZip}
          />
        </div>
      )}
    </div>
  );
}

export default InteractiveFormInput;
