import './buttons.css'

function CircularActionButton({ children, onClick, ...props }) {
    /**
    return (
        <div>
            <div className="flex justify-center pulse-hover" onClick={onClick}>
                <div className="flex justify-center items-center w-28 h-28 rounded-full bg-primary text-lg font-semibold cursor-pointer">
                    {children}
                </div>
            </div>

        </div>
    )
     */

    return (
        <div>
            <div className="flex mb-4 action-button" onClick={onClick}>
                
                <div className="flex items-center w-full border border-bone rounded-sm font-semibold cursor-pointer px-8 py-2 text-md">
                    <span className='mr-2 hidden-icon-til-hover font-bold'>+</span>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CircularActionButton;