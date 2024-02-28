'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Button } from '../ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { DataTableColumnHeader } from './data-table-column-header';

import Modal from './Modal';
import Link from 'next/link';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Book = {
  id: string;
  title: string;
  pages: string;
  status: string;
  author: string;
};

export const columns: ColumnDef<Book>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'author',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Author
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'pages',
    header: () => <div className="text-left">Pages</div>,
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-left">Status</div>,
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const bookId = row.original.id;

      return (
        <div className="flex gap-2">
          <Button asChild variant="secondary">
            <Link href={`/dashboard/edit/${bookId}`}>Edit</Link>
          </Button>
          <Modal data={bookId} />
        </div>
      );
    },
  },
];
