import { toast } from "react-toastify";
import { css } from "glamor";

const CustomToast = {
    success(message) {
        return toast.success(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastClassName: css({
                background: "#28a745 !important",
            }),
        });
    },

    info(message) {
        return toast.info(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: css({
                color: "#000 !important",
                background: "#dc3545 !important",
            }),
        });
    },
    error(message) {
        return toast.error(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: css({
                background: "#dc3545 !important",
            }),
        });
    },
};

export default CustomToast;
