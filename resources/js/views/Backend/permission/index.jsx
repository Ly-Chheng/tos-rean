import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Search } from "lucide-react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import ToolTipButton from "../../../components/TooltipButton";
import Pagination from "../../../components/Paginate";
import { Button, Input, Select, message } from "antd";
import React, { useState, useEffect } from "react";
import CreatePermission from "./create";
import { useConfirmModal } from "../../../components/ModalContext";
import ToastNotification from "@/components/ToastNotification";

function Permission({ auth, permissions, success = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [editingPermission, setEditingPermission] = useState(null);
  const { showModal: showConfirmModal, contextHolder } = useConfirmModal();

  const filteredPermissions = permissions.filter((perm) =>
    perm?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredPermissions.length;
  const lastPage = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    if (currentPage > lastPage && lastPage > 0) {
      setCurrentPage(lastPage);
    }
  }, [currentPage, lastPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentPermissions = filteredPermissions.slice(startIndex, endIndex);

  const handleDeleteClick = (id) => {
    const permission = permissions.find((perm) => perm.id === id);
    showConfirmModal({
      type: "confirm",
      title: "Confirm Deletion",
      content: `Are you sure you want to delete permission "${permission.name}"?`,
      okText: "Delete",
      cancelText: "Cancel",
      onOk: () => {
        router.delete(route("permission.destroy", id), {
          onSuccess: () => {
            setCurrentPage(1);
          },
          onError: () => {
            message.error("Failed to delete permission");
          },
        });
      },
      onCancel: () => {
      },
    });
  };

  const handleEditClick = (id) => {
    const permission = permissions.find((perm) => perm.id === id);
    setEditingPermission(permission);
    setShowModal(true);
  };

  const handleModalOk = (values) => {
    setConfirmLoading(true);
    const isEdit = !!editingPermission;

    const routeName = isEdit ? "permission.update" : "permission.store";
    const method = isEdit ? "put" : "post";
    const routeParams = isEdit ? [route(routeName, editingPermission.id)] : [route(routeName)];

    router[method](...routeParams, values, {
      onSuccess: () => {
        setShowModal(false);
        setConfirmLoading(false);
        setEditingPermission(null);
      },
      onError: () => {
        setConfirmLoading(false);
      },
    });
  };

  const handleModalCancel = () => {
    setShowModal(false);
    setEditingPermission(null);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center">
          <Link href={route("permission.index")}>
            <h6 className="text-sm text-gray-800 dark:text-gray-200 leading-tight px-1">
              ការអនុញ្ញាត
            </h6>
          </Link>
        </div>
      }
    >
      {contextHolder} {/* Add contextHolder for the confirmation modal */}
      <Head title="Permission" />
      <ToastNotification success={success} routeName="permission.index" />
      <div className="">
        <div className="flex flex-row gap-x-4 justify-between mb-4">
          <div className="flex items-center gap-x-2">
            <h4 className="text-sm">Show</h4>
            <Select
              value={itemsPerPage.toString()}
              style={{ width: 100 }}
              onChange={(value) => {
                setItemsPerPage(parseInt(value));
                setCurrentPage(1);
              }}
              options={[
                { value: "8", label: "8" },
                { value: "10", label: "10" },
                { value: "25", label: "25" },
                { value: "50", label: "50" },
                { value: "100", label: "100" },
              ]}
            />
          </div>

          <div className="flex items-center gap-x-2">
            <Input
              placeholder="Search permission..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              prefix={<Search size={14} />}
              className="w-64 dark:bg-gray-700 dark:text-white"
            />
            <Button type="primary" onClick={() => setShowModal(true)}>
              Add
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 text-sm rounded shadow">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th scope="col" className="py-2 px-4 text-center w-[50px]">
                  #
                </th>
                <th scope="col" className="py-2 px-4 text-left">
                  Name
                </th>
                <th scope="col" className="py-2 px-4 text-center w-[120px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPermissions.length > 0 ? (
                currentPermissions.map((permission, index) => (
                  <tr
                    key={permission.id}
                    className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="py-2 px-4 text-center">
                      {startIndex + index + 1}
                    </td>
                    <td className="py-2 px-4">{permission.name}</td>
                    <td className="py-2 px-4">
                      <div className="flex justify-center space-x-2">
                        <ToolTipButton
                          text="Edit"
                          icon={<FiEdit className="w-4 h-4" />}
                          onClick={() => handleEditClick(permission.id)}
                          color="blue"
                          aria-label={`Edit permission ${permission.name}`}
                        />
                        <ToolTipButton
                          text="Delete"
                          icon={<FiTrash2 className="w-4 h-4" />}
                          onClick={() => handleDeleteClick(permission.id)}
                          color="red"
                          position="right"
                          aria-label={`Delete permission ${permission.name}`}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="py-3 px-4 text-center text-gray-500"
                  >
                    No permissions found. Try adding a new permission.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          onPageChange={setCurrentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(val) => {
            setItemsPerPage(val);
            setCurrentPage(1);
          }}
        />

        <CreatePermission
          open={showModal}
          confirmLoading={confirmLoading}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          editingPermission={editingPermission}
        />
      </div>
    </AuthenticatedLayout>
  );
}

export default Permission;