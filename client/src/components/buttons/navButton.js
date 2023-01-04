function NavButton({ text, onClick, disabled = false}) {
    return (
        <button
            className={`nav-button ${disabled ? 'disabled' : ''} bg-primary text-white py-2 px-4 w-48`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default NavButton;