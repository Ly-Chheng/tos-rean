import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { 
  Users, 
  Eye,
  ChevronRight,
  Search,
  File,
  Video,
  Gift, FileText, UserPlus, TrendingUp
} from "lucide-react";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import FormattedDate from "@/Components/FormattedDate";
import { router } from '@inertiajs/react';

export default function Faqs({ auth }) {   
 
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center dark:text-gray-200">
          <Link href={route("faqs.index")}>
            <div className="flex items-center">
              <h6 className="text-sm text-gray-800 dark:text-gray-200 leading-tight px-1">
                FAQs
              </h6>
            </div>
          </Link>
        </div>
      }>
      <Head title="Faqs" />
    </AuthenticatedLayout>
  );
}