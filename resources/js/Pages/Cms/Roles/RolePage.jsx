import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FormOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button } from "antd";

function UserRole({ auth, roles }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center dark:text-gray-200">
          <Link href={route("roles.index")}>
            <div className="flex items-center">
              <h6 className="text-sm text-gray-800 dark:text-gray-200 leading-tight px-1">
                User Role
              </h6>
            </div>
          </Link>
        </div>
      }
    >
      <Head title="Role" />

      <div className="p-4">

        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4"> </h2>
          <Link href={route("roles.create")}>
            <Button type="primary" className="mb-4">
              Add
            </Button>
          </Link>

        </div>
        <table className="min-w-full bg-white dark:bg-gray-800 text-sm">
          <thead>
            <tr className="bg-blue-500 dark:bg-blue-400 text-left text-white p-4">
              <th className="py-2 px-4 w-[50px] text-center">#</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Position</th>
              <th className="py-2 px-4 w-[120px] text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {roles && roles.length > 0 ? (
              roles.map((role, index) => (
                <tr key={role.id} className="border-b border-gray-300 dark:border-gray-600">
                  <td className="py-2 px-4 text-center">{index + 1}</td>
                  <td className="py-2 px-4">{role.name}</td>
                  <td className="py-2 px-4">{role.guard_name}</td>
                  <td className="py-2 px-4 text-center">
                    <div className="flex justify-center space-x-2">
                      <Button type="primary" danger ghost size="small" icon={<EyeOutlined />} title="View" />
                      <Button type="primary" primary ghost size="small" icon={<FormOutlined />} title="Edit" />
                      <Button type="primary" danger size="small" icon={<DeleteOutlined />} title="Delete" />
                    </div>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-2 px-4 text-center text-gray-500">
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

export default UserRole;
