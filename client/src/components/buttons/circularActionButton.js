import './buttons.css'

function CircularActionButton({ children, onClick, ...props }) {
    return (
        <div>
            <div className="flex justify-center pulse-hover" onClick={onClick}>
                <div className="flex justify-center items-center w-28 h-28 rounded-full bg-primary text-lg font-semibold cursor-pointer">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default CircularActionButton;