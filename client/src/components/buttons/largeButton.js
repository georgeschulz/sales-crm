function LargeButton({ handleClick, text}) {
  return (
    <div>
        <button className="bg-bone text-xl px-14 py-2 font-semibold text-black" onClick={() => handleClick()}>
            {text}
        </button>
    </div>
  );
}

export default LargeButton;