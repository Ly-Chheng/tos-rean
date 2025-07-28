import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from "@inertiajs/react";

const ToastNotification = ({ success, routeName }) => {
  const [prevSuccess, setPrevSuccess] = useState(null);

  useEffect(() => {
    if (success && success !== prevSuccess) {
      toast.success(success, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setPrevSuccess(success);

      // Only replace route if routeName is provided
      if (routeName) {
        router.replace(route(routeName), {}, { preserveState: true });
      }
    }
  }, [success, routeName, prevSuccess]);

  return <ToastContainer />;
};

export default ToastNotification;