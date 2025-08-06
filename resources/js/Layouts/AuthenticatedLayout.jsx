import { useState, useEffect, memo } from "react";
import Swal from "sweetalert2";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";
import useInactivityRedirect from "../hook/useInactivityRedirect";

function AuthenticatedLayout({ user, header, children }) {
    useInactivityRedirect();
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isOnline, setIsOnline] = useState(navigator.onLine); // Track online status

    // Handle theme changes
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Show offline alert when user goes offline
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => {
            setIsOnline(false);
            Swal.fire({
                title: "You are offline",
                text: "Your data will be saved locally and synced when you reconnect.",
                icon: "warning",
                confirmButtonText: "OK",
                allowOutsideClick: false,
            });
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex">
                {sidebarOpen && <Sidebar user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
                <div className="flex-1 flex flex-col">
                    <Header user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} theme={theme} setTheme={setTheme} />
                    <Main header={header}>{children}</Main>
                </div>
            </div>
            {sidebarOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
            )}
        </div>
    );
}

export default memo(AuthenticatedLayout, (prevProps, nextProps) => {
    return (
        prevProps.user?.id === nextProps.user?.id &&
        prevProps.header === nextProps.header &&
        prevProps.children === nextProps.children
    );
});