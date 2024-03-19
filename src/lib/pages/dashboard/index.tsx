'use client';

import React from 'react';
import { columns } from '@/lib/components/dashboard/columns';
import { DataTable } from '@/lib/components/dashboard/data-table';
import { useQuery } from '@tanstack/react-query';
import { getBookList } from '@/lib/utils/api-request';
import { AddBooks } from '@/lib/components/dashboard/add-books';

const Dashboard = () => {
  // save ke localStorage.
  const {
    data: dataUser,
    isLoading,
    isError,
    
  } = useQuery({
    queryKey: ['book-list'],
    queryFn: () => getBookList(),
    staleTime: 1 * 60 * 1000,
    enabled: true,
  });
  console.log('dataUser', dataUser);

  return (
    <div className="flex flex-col">
      <div className="flex ml-auto">
        <AddBooks />
      </div>
     
      {isLoading ? (
        <div>Loading books...</div>
      ) : (
         <DataTable columns={columns} data={dataUser || [] } />
      )}
      {isError ? <div>Error fetching books</div> : null}
    </div>
  );
};

export default Dashboard;
