import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FormOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Select } from "antd";
import Pagination from "@/Components/Paginate";
import { useState, useEffect } from "react";

function Index({ auth, users }) {

  //start pagination state
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = users.length;
  const lastPage = Math.ceil(totalItems / itemsPerPage);
  useEffect(() => {
    if (currentPage > lastPage && lastPage > 0) {
      setCurrentPage(lastPage);
    }
  }, [currentPage, lastPage]);
  //end pagination state

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentUsers = users.slice(startIndex, endIndex);

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
      <Head title="Users" />

      <div className="">
        <div className="flex justify-between mb-4">
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
                <tr key={user.id} className="border-b border-gray-300 dark:border-gray-600 dark:text-gray-200">
                  <td className="py-2 px-4 text-center">{startIndex + index + 1}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">
                    <span className="bg-green-600 dark:bg-blue-900 px-2 py-1 text-white dark:text-blue-200 inline-block rounded-full">
                      {user.roles || 'N/A'}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-1 py-1 text-white text-xs inline-block rounded ${
                        user.status === 1
                          ? 'bg-green-600 dark:bg-green-800'
                          : 'bg-red-600 dark:bg-red-800'
                      }`}
                    >
                    </span>{user.status === 1 ? ' Active' : ' Inactive'}
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
  );
}

export default Index;
