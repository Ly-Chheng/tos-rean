import { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Make sure you have your logo here

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#00519C] z-50">
      <img
        src={logo}
        alt="Logo"
        className="w-24 h-24 md:w-32 md:h-32 mb-6 animate-scale-in"
      />
      <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide animate-fade-in-out">
        Welcome
      </h1>
    </div>
  );
}

export default SplashScreen;