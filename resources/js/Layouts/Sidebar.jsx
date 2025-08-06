import { useState, useEffect } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Logo from "../assets/logo/react.png";
import {
  LayoutDashboard,
  Users,
  Menu,
  ChevronDown,
  ChevronLeft,
  Search,
  Book,
  Lock,
} from "lucide-react";

function DraggableMenuItem({ menu, index, moveMenuItem, permissions, openDropdown, toggleDropdown }) {
  const [{ isDragging }, drag] = useDrag({
    type: "MENU_ITEM",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "MENU_ITEM",
    hover: (item) => {
      if (item.index !== index) {
        moveMenuItem(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`transition-opacity ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {menu.items ? (
        <DropdownMenu
          key={menu.name}
          title={menu.name}
          icon={menu.icon}
          items={menu.items}
          isOpen={openDropdown === menu.name}
          toggleOpen={() => toggleDropdown(menu.name)}
          permissions={permissions}
        />
      ) : (
        <button
          key={menu.route || menu.name}
          onClick={menu.onClick ? menu.onClick : () => router.visit(route(menu.route))}
          className={`flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors ${
            menu.route && route().current(menu.route)
              ? "bg-blue-50 dark:bg-gray-700 border-r-4 border-blue-500"
              : ""
          }`}
        >
          <menu.icon size={20} className="mr-3" />
          {menu.name}
        </button>
      )}
    </div>
  );
}

// Dropdown Menu Component
function DropdownMenu({ title, icon: Icon, items, isOpen, toggleOpen, permissions }) {
  return (
    <div>
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center">
          <Icon size={20} className="mr-3" />
          {title}
        </div>
        {isOpen ? <ChevronDown size={16} /> : <ChevronLeft size={16} />}
      </button>
      {isOpen && (
        <div>
          {items.map((item) =>
             !item.permission || permissions.includes(item.permission) ? (
              item.href ? (
                <a
                  key={`${item.route || item.href}-${item.name}`}
                  href={item.href}
                  className={`flex items-center px-4 py-2 ml-4 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 ${
                    route().current(item.route) ||
                    route().current(`${item.route.split('.')[0]}.create`) ||
                    route().current(`${item.route.split('.')[0]}.edit`) ||
                    route().current(`${item.route.split('.')[0]}.show`)
                      ? "bg-blue-50 dark:bg-gray-700 border-r-4 border-blue-500"
                      : ""
                  }`}
                >
                  <span className="mr-2">●</span> {item.name}
                </a>
              ) : (
                <Link
                  key={`${item.route || item.href}-${item.name}`}
                  href={route(item.route)}
                  className={`flex items-center px-4 py-2 ml-4 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 ${
                    route().current(item.route) ||
                    route().current(`${item.route.split('.')[0]}.create`) ||
                    route().current(`${item.route.split('.')[0]}.edit`) ||
                    route().current(`${item.route.split('.')[0]}.show`)
                      ? "bg-blue-50 dark:bg-gray-700 border-r-4 border-blue-500"
                      : ""
                  }`}
                >
                  <span className="mr-2">●</span> {item.name}
                </Link>
              )
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { auth } = usePage().props;
  const permissions = auth?.user?.permissions || [];
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [menuStructure, setMenuStructure] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const defaultMenuStructure = [
    {
      name: "ផ្ទាំងគ្រប់គ្រង",
      route: "dashboard",
      icon: LayoutDashboard,
      permission: null,
    },
    {
      name: "ការគ្រប់គ្រង",
      icon: Users,
      permission: null,
      items: [
        { name: "ការអនុញ្ញាត", route: "permission.index", permission: null },
        { name: "តួនាទី", route: "roles.index", permission: null },
        { name: "អ្នកប្រើប្រាស់", route: "users.index", permission: null },
        
      ],
    },
    {
      name: "ចាក់សោអេក្រង់",
      icon: Lock,
      permission: null,
      onClick: () => router.post('/lock-screen'),
    },
  ];

  useEffect(() => {
    const savedMenuOrder = localStorage.getItem("sidebarMenuOrder");
    if (savedMenuOrder) {
      const orderedNames = JSON.parse(savedMenuOrder);
      const orderedMenu = orderedNames
        .map((name) => defaultMenuStructure.find((menu) => menu.name === name))
        .filter((item) => item !== undefined);
        const mergedMenu = [
        ...orderedMenu,
        ...defaultMenuStructure.filter(
          (menu) => !orderedMenu.some((item) => item.name === menu.name)
        ),
      ];
      setMenuStructure(mergedMenu);
    } else {
      setMenuStructure(defaultMenuStructure);
    }
  }, []);

  useEffect(() => {
    if (menuStructure.length > 0) {
      const menuOrder = menuStructure.map((menu) => menu.name);
      localStorage.setItem("sidebarMenuOrder", JSON.stringify(menuOrder));
    }
  }, [menuStructure]);

  const moveMenuItem = (fromIndex, toIndex) => {
    const updatedMenu = [...menuStructure];
    const [movedItem] = updatedMenu.splice(fromIndex, 1);
    updatedMenu.splice(toIndex, 0, movedItem);
    setMenuStructure(updatedMenu);
  };

  const toggleDropdown = (name) => {
     console.log("Toggling dropdown:", name);
    setOpenDropdown((prev) => (prev === name ? null : name));
  };
  

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const allItems = menuStructure.flatMap((menu) => {
      if (menu.items) return menu.items;
      if (menu.name && menu.route) return [menu];
      return [];
    });

    const filteredItems = allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) &&
        (!item.permission || permissions.includes(item.permission))
    );
    setSearchResults(filteredItems);
  };

  const hasPermittedSubItem = (menu) => {
    if (!menu.items) return true;
    return menu.items.some((item) => !item.permission || permissions.includes(item.permission));
  };

  const isUserManagementRoute = [
    "user.index",
    "user.create",
    "user.edit",
  ].some((routeName) => route().current(routeName));

  const isContentManagementRoute = [
    "permission.index",
    "permission.create",
    "permission.edit",
    "roles.index",  
    "roles.create",
    "roles.edit",
    "users.index",
    "users.create",
    "users.edit",

  ].some((routeName) => route().current(routeName));
  

  const isSettingsManagementRoute = [
    "feedbacks.get_feedbacks",
  ].some((routeName) => route().current(routeName));

  const isReportsManagementRoute = [
    "reports.get_bar_chart",
  ].some((routeName) => route().current(routeName));

  useEffect(() => {
    if (isUserManagementRoute) {
      setOpenDropdown("គ្រប់គ្រង គណនី");
    }else if (isContentManagementRoute) {
      setOpenDropdown("ការគ្រប់គ្រង");
    }  else if (isReportsManagementRoute) {
      setOpenDropdown("Reports");
    } 
    else {
      setOpenDropdown(null);
    }
  }, [isUserManagementRoute, isSettingsManagementRoute, isReportsManagementRoute, isContentManagementRoute]);

  return (
    <DndProvider backend={HTML5Backend}>
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-gray-800 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col h-screen">
          <div className="flex items-center justify-between px-4 py-4 bg-[#3465f4]">
             <Link href="/" className="flex items-center">
              <img src={Logo} alt="Logo" className="h-8 w-auto fill-current text-white"/>
              <span className="ml-2 text-white font-semibold text-lg">តោះរៀន!</span>
            </Link>
            <button
              className="md:hidden text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={20} />
            </button>
          </div>

          <div className="px-4 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="ស្វែងរកម៉ឺនុយ..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {searchQuery.length > 0 ? (
              <div className="px-4 py-2">
                {searchResults.length > 0 ? (
                  searchResults.map((item) =>
                    item.href ? (
                      <a
                        key={`${item.route || item.href}-${item.name}`}
                        href={item.href}
                        className={`flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 rounded`}
                        onClick={() => setSearchQuery("")}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={`${item.route || item.href}-${item.name}`}
                        href={route(item.route)}
                        className={`flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 rounded ${
                          route().current(item.route)
                            ? "bg-blue-100 dark:bg-gray-700"
                            : ""
                        }`}
                        onClick={() => setSearchQuery("")}
                      >
                        {item.name}
                      </Link>
                    )
                  )
                ) : (
                  <div className="text-gray-500 dark:text-gray-400 px-4 py-2">
                    No results found
                  </div>
                )}
              </div>
            ) : (
              menuStructure.map((menu, index) =>
                (!menu.permission || permissions.includes(menu.permission)) && hasPermittedSubItem(menu) ? (
                  <DraggableMenuItem
                    key={menu.name}
                    menu={menu}
                    index={index}
                    moveMenuItem={moveMenuItem}
                    permissions={permissions}
                    openDropdown={openDropdown}
                    toggleDropdown={toggleDropdown}
                  />
                ) : null
              )
            )}
          </nav>
        </div>
      </aside>
    </DndProvider>
  );
}