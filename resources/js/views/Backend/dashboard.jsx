import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {   
 
  return (
    <AuthenticatedLayout user={auth.user}
      header={
        <div className="flex items-center dark:text-gray-200">
          <Link href={route("dashboard")}>
            <div className="flex items-center">
              <h6 className="text-sm text-gray-800 dark:text-gray-200 leading-tight px-1">
                ផ្ទាំងគ្រប់គ្រង
              </h6>
            </div>
          </Link>
        </div>
      }>
      <Head title="Dashboard" />
    </AuthenticatedLayout>
  );
}