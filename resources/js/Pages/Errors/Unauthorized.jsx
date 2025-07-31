import React from 'react';
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Lock, ArrowLeft, AlertTriangle } from "lucide-react";

export default function Unauthorized({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Access Denied</h2>}
    >
      <Head title="Unauthorized Access" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-12 text-center">
              <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-100 mb-6">
                <Lock className="h-12 w-12 text-red-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">403 - Unauthorized Access</h1>
              <p className="text-lg text-gray-600 mb-8">
                You don't have permission to view this page.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 max-w-2xl mx-auto">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Need access? Contact your administrator and request the following permissions:
                    </p>
                  </div>
                </div>
              </div>

              <Link 
                href={route('dashboard')} 
                className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}