
import { Link } from "@inertiajs/react";
import { Eye, Pencil, Trash2 } from "lucide-react";

const Button = ({
  href,
  onClick,
  text,
  action,
  color,
  className = "",
  title,
}) => {
  const icons = {
    view: Eye,
    edit: Pencil,
    delete: Trash2,
  };

  const defaultColors = {
    view: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    edit: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    delete: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const Icon = action ? icons[action.toLowerCase()] : null;
  const colorStyle = color
    ? `bg-${color}-600 text-white hover:bg-${color}-700 focus:ring-${color}-500`
    : defaultColors[action?.toLowerCase()] || defaultColors.edit;

  const baseClasses = `
    inline-flex items-center justify-center gap-1 px-2 py-1 rounded-md
    font-medium text-xs transition-all duration-150
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${colorStyle}
    ${className}
  `.trim();

  if (href) {
    return (
      <Link href={href} className={baseClasses} title={title}>
        {Icon && <Icon className="w-3.5 h-3.5" />}
        {text && <span>{text}</span>}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} title={title}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;