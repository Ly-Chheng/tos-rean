import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from "@inertiajs/react";

const ToastNotification = ({ success, routeName }) => {
  const prevSuccessRef = useRef(null);

  useEffect(() => {
    if (success) {
      toast.success(success, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId: `${success}-${Date.now()}`,
      });
      if (routeName) {
        router.replace(route(routeName), {}, { preserveState: true });
      }
    }
  }, [success, routeName]);


  return <ToastContainer />;
};

export default ToastNotification;
