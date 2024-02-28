'use client';

import { Button } from '@/lib/components/ui/button';
import { Input } from '@/lib/components/ui/input';
import { Label } from '@/lib/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/lib/components/ui/select';
import { getBookList } from '@/lib/utils/api-request';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const EditBook = () => {
  // State management for book inputs
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [status, setStatus] = useState('');
  const router = usePathname();
  const bookId = router.split('/').pop() || '';
  const {
    data: bookList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['book-list'],
    queryFn: () => getBookList(),
    staleTime: 1 * 60 * 1000,
  });

  console.log(' data', bookList);
  useEffect(() => {
    if (bookList && bookId) {
      const bookDetails = bookList.find((book) => book.id === bookId);
      if (bookDetails) {
        // Assuming bookDetails contains id, title, author, pages, and status
        setId(bookDetails.id);
        setTitle(bookDetails.title);
        setAuthor(bookDetails.author);
        setPages(bookDetails.pages);
        setStatus(bookDetails.status);
      }
    }
  }, [bookList, bookId]);
  return (
    <div className="mx-auto flex items-center">
      <form>
        <div className="grid gap-4 py-4">
          {/* Title */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              ID
            </Label>
            <Input
              id="title"
              value={id}
              disabled
              onChange={(e) => setId(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          {/* Author */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="author" className="text-right">
              Author
            </Label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="col-span-3"
            />
          </div>
          {/* Pages */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pages" className="text-right">
              Pages
            </Label>
            <Input
              id="pages"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              className="col-span-3"
            />
          </div>
          {/* Status */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select
              value={status}
              onValueChange={setStatus}
              defaultValue={status}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="to do">To Do</SelectItem>
                  <SelectItem value="progress">Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit">Save changes</Button>
      </form>
    </div>
  );
};

export default EditBook;
