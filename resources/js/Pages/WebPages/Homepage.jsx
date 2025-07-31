import { useState } from 'react';
import { FaBook, FaShareAlt, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';
function HomepageWeb() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" shadow-md bg-blue-700">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-100 mr-4">MyLogo</div>
                <nav className="hidden md:flex  space-x-4 ">
                    <a href="#" className="text-gray-100 hover:bg-orange-500 px-3 py-2 rounded items-center"> <FaBook/> បាក់ឌុប</a>
                    <a href="#" className="text-gray-100 hover:bg-orange-500 px-3 px-3 py-2 rounded">ចែករំលែកបទពិសោធន៍</a>
                    <a href="#" className="text-gray-100 hover:bg-orange-500 px-3 px-3 py-2 rounded">កម្រងវិញ្ញាសារ</a>
                    <a href="#" className="text-gray-100 hover:bg-orange-500 px-3 px-3 py-2 rounded">FAQs</a>
                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Home</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">About</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Services</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-100">Contact</a>
                </nav>
            )}
        </header>
    );
}

export default HomepageWeb;
