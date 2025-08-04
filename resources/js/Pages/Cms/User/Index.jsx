import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { FaEdit, FaTrash, FaEye, FaRegEdit } from "react-icons/fa";
import { Button, Select } from "antd";
import Pagination from "@/Components/Paginate";
import ToolTipButton from "@/Components/TooltipButton";
import { useState, useEffect } from "react";
import { useConfirmModal } from "@/Components/ModalContext";
import { Col, Row } from "antd";

function Index({ auth, users }) {
  // Confirm modal hook
  const { showModal, contextHolder } = useConfirmModal();

  // Pagination state
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = users.length;
  const lastPage = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    if (currentPage > lastPage && lastPage > 0) {
      setCurrentPage(lastPage);
    }
  }, [currentPage, lastPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentUsers = users.slice(startIndex, endIndex);

  const [expandedUserId, setExpandedUserId] = useState(null); // State for expandable row

  const handleDeleteClick = (user) => {
    showModal({
      type: "confirm",
      title: "Confirm Deletion",
      content: `Are you sure you want to delete user "${user.name}"?`,
      okText: "Delete",
      cancelText: "Cancel",
      onOk: () => {
        router.delete(route("users.destroy", user.id), {
          onSuccess: () => console.log("User deleted successfully!"),
          onError: (errors) => console.log("Error deleting user:", errors),
        });
      },
      onCancel: () => {
        console.log("Cancelled delete");
      },
    });
  };

  const toggleExpand = (userId) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  return (
    <>
      {contextHolder}
      <AuthenticatedLayout
        user={auth.user}
        header={
          <div className="flex items-center dark:text-gray-200">
            <Link href={route("users.index")}>
              <div className="flex items-center">
                <h6 className="text-sm text-blue-600 dark:text-gray-200 leading-tight px-1">
                  Users
                </h6>
              </div>
            </Link>
          </div>
        }
      >
        <Head title="Users" />

        <div className="">
          <div className="flex justify-between mb-4">
            <div className="flex items-center space-x-2">
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
            
            <Link href={route("users.create")}>
              <Button type="primary">Add</Button>
            </Link>
          </div>

          <table className="min-w-full bg-white dark:bg-gray-800 text-sm">
            <thead>
              <tr className="bg-blue-500 dark:bg-blue-400 text-left text-white">
                <th className="py-2 px-4 w-[50px] text-center">#</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Role</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4 w-[120px] text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user, index) => (
                  <>
                    <tr
                      key={user.id}
                      className="border-b border-gray-300 dark:border-gray-600 dark:text-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-2 px-4 text-center">{startIndex + index + 1}</td>
                      <td className="py-2 px-4">{user.name}</td>
                      <td className="py-2 px-4">{user.email}</td>
                      <td className="py-2 px-4">
                        <span className="bg-green-600 dark:bg-blue-900 px-2 py-1 text-white dark:text-blue-200 inline-block rounded-full">
                          {user.roles || "N/A"}
                        </span>
                      </td>
                      <td className="py-2 px-4">
                        <span
                          className={`px-1 py-1 text-white text-xs inline-block rounded ${user.status === 1
                            ? "bg-green-600 dark:bg-green-800"
                            : "bg-red-600 dark:bg-red-800"
                            }`}
                        ></span>
                        {user.status === 1 ? " Active" : " Inactive"}
                      </td>
                      <td className="py-2 px-4 text-center">
                        <div className="flex justify-center space-x-2">
                          <ToolTipButton
                            text={expandedUserId === user.id ? "Hide" : "View"}
                            icon={<FiEye className="w-4 h-4" />}
                            onClick={() => toggleExpand(user.id)}
                            color="green"
                            aria-label={`${expandedUserId === user.id ? "Hide" : "View"
                              } details for user ${user.name}`}
                          />
                          <ToolTipButton
                            text="Edit"
                            icon={<FiEdit className="w-4 h-4" />}
                            onClick={() => router.get(route("users.edit", user.id))}
                            color="blue"
                            aria-label={`Edit user ${user.name}`}
                          />
                          <ToolTipButton
                            text="Delete"
                            icon={<FiTrash2 className="w-4 h-4" />}
                            onClick={() => handleDeleteClick(user)}
                            color="red"
                            position="right"
                            aria-label={`Delete user ${user.name}`}
                          />
                        </div>
                      </td>
                    </tr>
                    {expandedUserId === user.id && (
                      <tr
                        key={`${user.id}-expanded`}
                        className="bg-gray-50 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600"
                      >
                        <td colSpan="6" className="">
                          <div className="p-4">
                            <Row gutter={[16, 5]} className="p-4">
                              <Col span={24}>
                                <span className="font-bold text-base">View Details</span>
                              </Col>

                              <Col span={12}>
                                <span className="font-medium">Name:</span> {user.name}
                              </Col>

                              <Col span={12}>
                                <span className="font-medium">Email:</span> {user.email}
                              </Col>

                              <Col span={12}>
                                <span className="font-medium">Role:</span> {user.roles || "N/A"}
                              </Col>

                              <Col span={12}>
                                <span className="font-medium">Status:</span>{" "}
                                <span
                                  className={`px-3 py-1 text-white text-xs inline-block rounded-full ${
                                    user.status === 1
                                      ? "bg-green-400 dark:bg-green-800"
                                      : "bg-red-400 dark:bg-red-800"
                                  }`}
                                >
                                  {user.status === 1 ? "Active" : "Inactive"}
                                </span>
                              </Col>

                              <Col span={12}>
                                <span className="font-medium">Phone:</span> {user.phone || "N/A"}
                              </Col>

                              <Col span={12}>
                                <span className="font-medium">Created At:</span> {user.created_at || "N/A"}
                              </Col>

                              <Col span={12}>
                                <span className="font-medium">Updated At:</span> {user.updated_at || "N/A"}
                              </Col>
                            </Row>

                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-2 px-4 text-center text-gray-500">
                    No users found.
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
      </AuthenticatedLayout>
    </>
  );
}

export default Index;