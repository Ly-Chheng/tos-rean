import React from "react";

class ToolTipButton extends React.Component {
    render() {
        const { text, icon, position='up', onClick, color = "gray", hoverColor = `${color}-700` } = this.props;
        return (
            <div className="relative group inline-block">
                <button
                    className={`p-1 text-${color}-600 hover:text-${hoverColor} hover:bg-${color}-100 dark:hover:bg-${color}-900/20 rounded transition-colors duration-150`}
                    onClick={onClick}
                    aria-label={text}
                >
                    {icon}
                </button>
                <div
                    className={`absolute right-full top-1/2 -translate-y-1/2 ml-2 scale-0 rounded bg-gray-800 px-2 py-1 text-xs text-white font-semibold shadow-lg transition-transform duration-150 ease-in-out group-hover:scale-100 whitespace-nowrap z-10`}
                    role="tooltip"
                >
                    {text}
                </div>
            </div>
        );
    }
}

export default ToolTipButton;