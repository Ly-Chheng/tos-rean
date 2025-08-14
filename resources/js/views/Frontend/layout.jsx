import { Link, usePage } from '@inertiajs/react';
import { GiOpenBook, GiBookCover, GiTeacher } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from "../../assets/logo/tos_rean.png";
import Footer from '@/layouts/Footer';

// Define your menu items
const menuItems = [
    {
        name: 'រៀនត្រៀម',
        route: 'home',
        icon: GiOpenBook,
        permission: null,
    },
    {
        name: 'សៀវភៅ',
        route: 'book',
        icon: GiBookCover,
        permission: null,
    },
    {
        name: 'ថ្នាក់រៀន',
        route: 'class',
        icon: GiTeacher,
        permission: null,
    },
    {
        name: 'ការកំណត់',
        route: 'setting',
        icon: IoSettingsOutline,
        permission: null,
    }
];

function Navbar({ children }) {
    const { url } = usePage();
    const getActiveRoute = () => {
        const currentPath = url.split('/')[1] || 'home';
        return menuItems.find(item => item.route === currentPath)?.route || 'home';
    };
    const activeRoute = getActiveRoute();
    return (
        <>
            <header className="shadow-md text-black bg-white fixed top-0 left-0 right-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <img src={Logo} alt="Logo" className="h-10" />
                    <nav className="hidden md:flex space-x-4">
                        {menuItems.map((item, index) => {
                            if (item.permission === null) {
                                const Icon = item.icon;
                                const isActive = activeRoute === item.route;
                                return (
                                    <Link
                                        key={index}
                                        href={route(item.route)}
                                        className={`group flex items-center gap-2 ${isActive ? 'textblue' : 'text-gray-600'} hover:textblue px-4 py-2 rounded transition duration-200`}
                                    >
                                        <div className='flex flex-col'>
                                            <div className="flex gap-2">
                                                <div className={`rounded-full flex items-center justify-center ${isActive ? 'textblue' : 'text-gray-600'}`}>
                                                    {Icon && <Icon className="text-lg group-hover:textblue dark:group-hover:textblue" />}
                                                </div>
                                                <span className="font-medium">{item.name}</span>
                                            </div>
                                            <div className={`h-0.5 mt-1 w-full bgblue rounded origin-left scale-x-0 ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'} transition-transform duration-300`}></div>
                                        </div>
                                    </Link>
                                );
                            }
                            return null;
                        })}
                    </nav>
                </div>
            </header>

            {/* Bottom Navigation for Mobile */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md z-50 border-t dark:border-gray-700">
                <div className="flex justify-around items-center py-2">
                    {menuItems.map((item, index) => {
                        if (item.permission === null) {
                            const Icon = item.icon;
                            const isActive = activeRoute === item.route;
                            return (
                                <Link
                                    key={index}
                                    href={route(item.route)}
                                    className={`flex flex-col items-center text-xs ${isActive ? 'textblue' : 'text-gray-700'} dark:${isActive ? 'text-blue-00' : 'text-gray-600'} hover:textblue dark:hover:text-blue-400 group`}
                                >
                                    <Icon className="text-xl mb-1" />
                                    {item.name}
                                    <div className={`h-0.5 mt-1 w-0 bgblue rounded ${isActive ? 'w-full' : 'group-hover:w-full'} transition-all duration-300`}></div>
                                </Link>
                            );
                        }
                        return null;
                    })}
                </div>
            </nav>
            

            {/* Padding space for content */}
            <div className="sm:pt-5 md:pt-20 pb-16 md:pb-0 sm:pl-3" />
            <main>
                {children}
            </main>

            <Footer/>
        </>
    );
}

export default Navbar;