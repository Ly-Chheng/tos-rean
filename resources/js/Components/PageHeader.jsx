import { Link } from "@inertiajs/react"; // Import Link from Inertia
import { Button } from "@material-tailwind/react";

const PageHeader = ({
    title = "Default Title",
    buttonText = "បង្កើតថ្មី",
    buttonRoute = null, // Allow null for modal case
    onClick = null, // Allow null for route case
    buttonColor = "green",
    buttonSize = "lg",
    buttonIcon = "Plus",
    className = "",
}) => {
    const renderIcon = () => {
        switch (buttonIcon) {
            case "Plus":
                return (
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                );
            default:
                return null;
        }
    };

    // Common button props
    const buttonProps = {
        color: buttonColor,
        size: buttonSize,
        className: "bg-green-500 text-white rounded shadow transition-all hover:bg-green-600 px-2 py-2 flex items-center",
    };

    return (
        <div className={`flex justify-between items-center bg-white dark:bg-gray-800 mb-5 p-3 rounded-lg ${className}`}>
            <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-200 leading-tight">
                {title}
            </h2>
            {buttonRoute ? (
                <Link href={buttonRoute}>
                    <Button {...buttonProps}>
                        {renderIcon()}
                        {buttonText}
                    </Button>
                </Link>
            ) : (
                <Button {...buttonProps} onClick={onClick}>
                    {renderIcon()}
                    {buttonText}
                </Button>
            )}
        </div>
    );
};

export default PageHeader;