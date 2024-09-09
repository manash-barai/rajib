import React from 'react';
import AdminNav from '@/components/AdminNav';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto flex gap-2 p-0 my-0">
        <AdminNav />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
