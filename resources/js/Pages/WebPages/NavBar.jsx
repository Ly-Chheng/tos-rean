import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { GiOpenBook, GiBookCover, GiTeacher } from 'react-icons/gi';
import { IoSettingsOutline } from 'react-icons/io5';
import logo from '../../assets/images/logo.png';

const menuItems = [
  { name: 'រៀនត្រៀម', route: 'homepage', icon: GiOpenBook, permission: null },
  { name: 'សៀវភៅ', route: 'books', icon: GiBookCover, permission: null },
  { name: 'ថ្នាក់រៀន', route: 'classes', icon: GiTeacher, permission: null },
  { name: 'ការកំណត់', route: 'classes', icon: IoSettingsOutline, permission: null },
];

function Navbar() {
  const { url } = usePage();
  const [isOpen, setIsOpen] = useState(false);

  const getActiveRoute = () => {
    const currentPath = url.split('/')[1] || 'homepage';
    return menuItems.find(item => item.route === currentPath)?.route || 'homepage';
  };

  const activeRoute = getActiveRoute();

  return (
    <>
      <header className="shadow-md text-black bg-white dark:text-white fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            {menuItems.map((item, index) => {
              if (item.permission === null) {
                const Icon = item.icon;
                const isActive = activeRoute === item.route;
                return (
                  <Link
                    key={index}
                    href={route(item.route)}
                    className={`group flex items-center gap-2 ${isActive ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 px-4 py-2 rounded transition duration-200`}
                  >
                    <div className='flex flex-col'> 
                      <div className="flex gap-2">
                        <div className={`rounded-full flex items-center justify-center ${isActive ? 'text-blue-600' : 'text-gray-600'}`}>
                          {Icon && <Icon className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-600" />}
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className={`h-0.5 mt-1 w-full bg-blue-600 rounded origin-left scale-x-0 ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'} transition-transform duration-300`}></div>
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
                  className={`flex flex-col items-center text-xs ${isActive ? 'text-blue-600' : 'text-gray-700'} dark:${isActive ? 'text-blue-00' : 'text-gray-600'} hover:text-blue-600 dark:hover:text-blue-400 group`}
                >
                  <Icon className="text-xl mb-1" />
                  {item.name}
                  <div className={`h-0.5 mt-1 w-0 bg-blue-600 rounded ${isActive ? 'w-full' : 'group-hover:w-full'} transition-all duration-300`}></div>
                </Link>
              );
            }
            return null;
          })}
        </div>
      </nav>

      {/* Padding space for content */}
      <div className="sm:pt-5 md:pt-20 pb-16 md:pb-0 sm:pl-3" />
    </>
  );
}

export default Navbar;