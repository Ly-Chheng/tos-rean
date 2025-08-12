import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import NavLink from "@/components/NavLink";
import { Link } from "@inertiajs/react";
import Logo from "../assets/logo/react.png";

export default function AuthenticatedLayout({ user, header, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      <div className={`${
          sidebarOpen ? "w-64" : "w-20"
        } min-h-screen bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between">
            <Link href="/">
              <img src={Logo} alt="Logo" className={`${
                  sidebarOpen ? "w-auto" : "w-10"
              } h-9 fill-current text-gray-800 dark:text-gray-200 transition-all duration-300`} />
            </Link>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {sidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-2 py-4">
            <div className="space-y-2">
              <NavLink
                href={route("dashboard")}
                active={route().current("dashboard")}
                className={`flex items-center p-2 rounded-lg ${
                  sidebarOpen ? "justify-start" : "justify-center"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {sidebarOpen && <span className="ml-3">Dashboard</span>}
              </NavLink>

              <NavLink
                href={route("project.index")}
                active={route().current("project.index")}
                className={`flex items-center p-2 rounded-lg ${
                  sidebarOpen ? "justify-start" : "justify-center"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                {sidebarOpen && <span className="ml-3">Projects</span>}
              </NavLink>

              <NavLink
                href={route("task.index")}
                active={route().current("task.index")}
                className={`flex items-center p-2 rounded-lg ${
                  sidebarOpen ? "justify-start" : "justify-center"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                {sidebarOpen && <span className="ml-3">All Tasks</span>}
              </NavLink>

              <NavLink
                href={route("user.index")}
                active={route().current("user.index")}
                className={`flex items-center p-2 rounded-lg ${
                  sidebarOpen ? "justify-start" : "justify-center"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                {sidebarOpen && <span className="ml-3">Users</span>}
              </NavLink>

              <NavLink
                href={route("task.myTasks")}
                active={route().current("task.myTasks")}
                className={`flex items-center p-2 rounded-lg ${
                  sidebarOpen ? "justify-start" : "justify-center"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                {sidebarOpen && <span className="ml-3">My Tasks</span>}
              </NavLink>
            </div>
          </nav>

          {/* User Profile */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <Dropdown>
              <Dropdown.Trigger>
                <button
                  className={`flex items-center ${
                    sidebarOpen ? "w-full" : "justify-center"
                  } text-sm`}
                >
                  <div className="relative w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600">{user.name[0]}</span>
                  </div>
                  {sidebarOpen && (
                    <>
                      <span className="ml-3 text-gray-700 dark:text-gray-300">
                        {user.name}
                      </span>
                      <svg
                        className="ml-2 h-4 w-4 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </Dropdown.Trigger>

              <Dropdown.Content>
                <Dropdown.Link href={route("profile.edit")}>ប្រវត្តិរូប</Dropdown.Link>
                <Dropdown.Link href={route("logout")} method="post" as="button">
                  ចាកចេញ
                </Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {header && (
          <header className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              {header}
            </div>
          </header>
        )}

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}