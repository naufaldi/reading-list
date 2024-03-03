"use client"

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"

import { useForm, Controller } from 'react-hook-form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/lib/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from '@/lib/components/ui/dialog';
import { Button } from '@/lib/components/ui/button';
import { Input } from '@/lib/components/ui/input';
import { Label } from '@/lib/components/ui/label';
import { useAddBookMutation } from '@/lib/hooks/useAddBookMutation';
import { BookListProps } from '@/lib/utils/api-request';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/lib/components/ui/form';

const FormSchema = z.object({
  id: z.string().min(2, {
    message: "ID must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  author: z.string().min(2, {
    message: "Author must be at least 2 characters.",
  }),
  pages: z.string().min(2, {
    message: "Pages must be at least 2 characters.",
  }),
  status: z.string().min(2, {
    message: "Status must be selected",
  }),
})

export function AddBooks() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
      title: "",
      author: "",
      pages: "",
      status: "",
    },
  })

  const addBookMutation = useAddBookMutation();

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    await addBookMutation.mutateAsync({
      ...values,
    },
      {
        onSuccess: () => {
          console.log('Book added successfully');
        },
        onError: (error) => {
          // Handle error case as needed
          console.error('Error adding book:', error);
        },
      }
    );
    // Additional success/error handling can be done here
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Books</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Book</DialogTitle>
          <DialogDescription>
            Enter book details and click save.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
            {/* ID */}
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID</FormLabel>
                  <FormControl>
                    <Input placeholder="your book id here.." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="your book title here.." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Author */}
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="your author here.." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Pages */}
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pages</FormLabel>
                  <FormControl>
                    <Input placeholder="your book pages here.." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Status */}
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select {...field} value={field?.value} defaultValue={field?.value} onValueChange={(val) => field.onChange(val)} >
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
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
