import { useState } from "react";

// Define this component inside your file
function HoverCard({ title, image, initialColor }) {
  const [bgColor, setBgColor] = useState(initialColor);

  const handleHover = () => {
    setBgColor('bg-pink-300'); // Set to pink-300 on hover
  };

  const handleMouseLeave = () => {
    setBgColor(initialColor); // Revert to initial color when not hovering
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-md flex items-center justify-between 
                  min-w-[160px] sm:min-w-[160px] md:min-w-[200px] lg:min-w-[230px] 
                  transition duration-200 ${bgColor}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave} // Revert color on mouse leave
    >
      <img
        src={image}
        alt={`${title} book category icon`}
        className="h-10 w-10 md:w-16 md:h-16 object-contain mr-4"
      />
      <p className="text-white font-medium text-sm md:text-base text-right flex-1">
        {title}
      </p>
    </div>
  );
}

export default HoverCard;