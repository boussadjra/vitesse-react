//dashboard component
import React, { useState } from 'react';

import DashboardHeader from '@/components/layout/DashboardHeader';
import DashboardSidebar from '@/components/layout/DashboardSidebar';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="h-full">
      <div className="flex flex-col w-full overflow-x-hidden text-slate-700 dark:text-slate-50 bg-gray-50 dark:bg-slate-800">
        <DashboardSidebar sidebarCollapsed={sidebarCollapsed} />
        <DashboardHeader sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />
        <div
          className={`w-full  relative transition-padding duration-700 pl-0 ${
            sidebarCollapsed ? 'md:pl-16 rtl:pl-0 md:rtl:pr-16' : 'rtl:pl-0 md:rtl:pr-64 md:pl-64'
          }`}
        >
          <main className="w-full pt-20 ps-8  text-slate-600 dark:text-slate-50 min-h-screen">{props.children}</main>
        </div>
      </div>
    </div>
  );
}
