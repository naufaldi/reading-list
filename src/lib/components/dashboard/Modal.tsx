import useStore from '@/lib/store/store';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '../ui/button';

const Modal = ({ data }: { data: string }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="destructive">Delete</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            Books with ID <span className="text-bold text-red-500">{data}</span>{' '}
            list from our servers.
          </DialogDescription>
          <DialogFooter>
            <Button variant="ghost">Cancel</Button>
            <Button variant="destructive">Yes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
