import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { Button, Row, Col } from "antd";
import ToolTipButton from "@/components/TooltipButton";
import { useState } from "react";
import { useConfirmModal } from "@/components/ModalContext";
import ToastNotification from "@/components/ToastNotification";

function Index({ auth, roles, success }) {
  const [expandedRoleId, setExpandedRoleId] = useState(null);
  const { showModal, contextHolder } = useConfirmModal();

  const handleDeleteClick = (role) => {
    showModal({
      type: "confirm",
      title: "Confirm Deletion",
      content: `Are you sure you want to delete role "${role.name}"?`,
      okText: "Delete",
      cancelText: "Cancel",
      onOk: () => {
        console.log("Confirmed deletion for role:", role.name); // Debug
        router.delete(route("roles.destroy", role.id), {
          onSuccess: () => console.log("Role deleted successfully!"),
          onError: (errors) => console.log("Error deleting role:", errors),
        });
      },
      onCancel: () => {
        console.log("Cancelled delete for role:", role.name); // Debug
      },
    });
  };

  const toggleContainer = (roleId) => {
    setExpandedRoleId(expandedRoleId === roleId ? null : roleId);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center dark:text-gray-200">
          <Link href={route("roles.index")}>
            <h6 className="text-sm text-gray-800 dark:text-gray-200 leading-tight px-1">
              តួនាទី
            </h6>
          </Link>
        </div>
      }
    >
      {contextHolder}
      <Head title="Roles" />

      <div className="">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4"></h2>
          <Link href={route("roles.create")}>
            <Button type="primary" className="mb-4">
              Add Role
            </Button>
          </Link>
        </div>
        <ToastNotification success={success} routeName="roles.index" />
        <table className="min-w-full bg-white dark:bg-gray-800 text-sm">
          <thead>
            <tr className="bg-blue-500 dark:bg-blue-400 text-left text-white">
              <th scope="col" className="py-2 px-4 w-[50px] text-center">
                #
              </th>
              <th scope="col" className="py-2 px-4">
                Name
              </th>
              <th scope="col" className="py-2 px-4 w-[120px] text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {roles && roles.length > 0 ? (
              roles.map((role, index) => (
                <>
                  <tr
                    key={role.id}
                    className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100"
                  >
                    <td className="py-2 px-4 text-center">{index + 1}</td>
                    <td className="py-2 px-4">{role.name}</td>
                    <td className="py-2 px-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <ToolTipButton
                          text={expandedRoleId === role.id ? "Hide" : "View"}
                          icon={<FiEye className="w-4 h-4" />}
                          onClick={() => toggleContainer(role.id)}
                          color="green"
                          aria-label={`${expandedRoleId === role.id ? "Hide" : "View"
                            } details for role ${role.name}`}
                        />
                        <ToolTipButton
                          text="Edit"
                          icon={<FiEdit className="w-4 h-4" />}
                          onClick={() => router.get(route("roles.edit", role.id))}
                          color="blue"
                          aria-label={`Edit role ${role.name}`}
                        />
                        <ToolTipButton
                          text="Delete"
                          icon={<FiTrash2 className="w-4 h-4" />}
                          onClick={() => handleDeleteClick(role)}
                          color="red"
                          position="right"
                          aria-label={`Delete role ${role.name}`}
                        />
                      </div>
                    </td>
                  </tr>
                  {expandedRoleId === role.id && (
                    <tr
                      key={`${role.id}-expanded`}
                      className="bg-gray-50 dark:bg-gray-700"
                    >
                      <td colSpan="3" className="py-2 px-4">
                        <div className="p-4 dark:bg-gray-800 rounded">
                          {Array.isArray(role.permissions) &&
                            role.permissions.length > 0 ? (
                            <Row gutter={[16, 16]}>
                              {role.permissions.map((permission, idx) => (
                                <Col span={8} key={permission.id || idx}>
                                  <span
                                    className={`px-0.5 py-0.5 text-white text-xs inline-block rounded bg-red-600 dark:bg-green-800`}
                                  ></span>
                                  <span className="ml-2 dark:text-gray-300">
                                    {permission.name}
                                  </span>
                                </Col>
                              ))}
                            </Row>
                          ) : (
                            <div className="text-gray-500 dark:text-gray-400">
                              No permissions assigned.
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-2 px-4 text-center text-gray-500">
                  No roles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AuthenticatedLayout>
  );
}

export default Index;