// src/utils/useConfirmModal.js
import { createContext, useContext } from "react";
import { Modal } from "antd";
import {
    ExclamationCircleOutlined,
    InfoCircleOutlined,
    CloseCircleOutlined,
} from "@ant-design/icons";

const ModalContext = createContext(null);

export const useConfirmModal = () => {
    const [modal, contextHolder] = Modal.useModal();

    const showModal = ({
        type = "confirm",
        title,
        content,
        okText,
        cancelText,
        okButtonProps,
        cancelButtonProps,
        onOk,
        onCancel,
        icon,
    }) => {
        // Default icon per type
        let defaultIcon;
        let defaultOkClass = "bg-blue-600 hover:bg-blue-700 text-white";

        switch (type) {
            case "warning":
                defaultIcon = <ExclamationCircleOutlined style={{ color: "#faad14" }} />;
                defaultOkClass = "bg-yellow-500 hover:bg-yellow-600 text-white";
                break;
            case "info":
                defaultIcon = <InfoCircleOutlined style={{ color: "#1890ff" }} />;
                defaultOkClass = "bg-cyan-600 hover:bg-cyan-700 text-white";
                break;
            case "error":
                defaultIcon = <CloseCircleOutlined style={{ color: "#ff4d4f" }} />;
                defaultOkClass = "bg-red-600 hover:bg-red-700 text-white";
                break;
            case "confirm":
            default:
                defaultIcon = <ExclamationCircleOutlined style={{ color: "red" }} />;
                defaultOkClass = "bg-red-600 hover:bg-blue-700 text-white";
                break;
        }

        const config = {
            title,
            content: (
                <ModalContext.Consumer>
                    {(value) => (typeof content === "function" ? content(value) : content)}
                </ModalContext.Consumer>
            ),
            okText: okText || "OK",
            cancelText: cancelText || "Cancel",
            icon: icon ?? defaultIcon,
            okButtonProps: {
                className: defaultOkClass,
                ...okButtonProps,
            },
            cancelButtonProps: {
                className: "bg-gray-200 hover:bg-gray-300 text-gray-800",
                ...cancelButtonProps,
            },
            onOk,
            onCancel,
        };

        // Always use `modal.confirm` to ensure both OK & Cancel buttons show
        return modal.confirm(config);
    };

    return { showModal, contextHolder, ModalContext };
};
