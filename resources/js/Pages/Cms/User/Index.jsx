import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FormOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button } from "antd";

function Index({ auth, users }) {
  return (
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
      <Head title="Role" />

      <div className="">

        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4"> </h2>
          <Link href={route("users.create")}>
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
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4 w-[120px] text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id} className="border-b border-gray-300 dark:border-gray-600 dark:text-gray-200">
                  <td className="py-2 px-4 text-center">{index + 1}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">
                    <span
                      className="bg-green-600 dark:bg-blue-900 px-1 py-1 text-white dark:text-blue-200 inline-block"
                      style={{ borderRadius: '6px' }}
                    >
                      {user.roles || 'N/A'}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-center">
                    <div className="flex justify-center space-x-2">
                      <Link href={route('users.show', user.id)}>
                        <Button type="primary" danger ghost size="small" icon={<EyeOutlined />} title="View" />
                      </Link>
                      <Link href={route('users.edit', user.id)}>
                        <Button type="primary" ghost size="small" icon={<FormOutlined />} title="Edit" />
                      </Link>
                      <Link
                        href={route('users.destroy', user.id)}
                        method="delete"
                        as="button"
                        type="button"
                      >
                        <Button type="primary" danger size="small" icon={<DeleteOutlined />} title="Delete" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-2 px-4 text-center text-gray-500">
                  No users found.
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
