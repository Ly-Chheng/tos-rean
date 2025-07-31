import { useEffect } from "react";
import { router } from "@inertiajs/react";

const useInactivityRedirect = () => {
    useEffect(() => {
        const timeout = 3600000;
        let timer = setTimeout(() => {
            sessionStorage.setItem("intendedUrl", window.location.pathname);
            router.visit("/lock-screen", {
                method: "post",
                preserveState: false,
            });
        }, timeout);

        const resetTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                sessionStorage.setItem("intendedUrl", window.location.pathname);
                router.visit("/lock-screen", {
                    method: "post",
                    preserveState: false,
                });
            }, timeout);
        };

        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("click", resetTimer);
        window.addEventListener("keydown", resetTimer);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("click", resetTimer);
            window.removeEventListener("keydown", resetTimer);
        };
    }, []);
};

export default useInactivityRedirect;