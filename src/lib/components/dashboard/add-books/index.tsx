import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/lib/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from '@/lib/components/ui/dialog';
import { Button } from '@/lib/components/ui/button';
import { Input } from '@/lib/components/ui/input';
import { Label } from '@/lib/components/ui/label';
import { useAddBookMutation } from '@/lib/hooks/useAddBookMutation';
import { BookListProps } from '@/lib/utils/api-request';



export function AddBooks() {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<BookListProps>();
  const addBookMutation = useAddBookMutation();

  const onSubmit = async (data: BookListProps) => {
    await addBookMutation.mutateAsync({
      ...data,
    },
      {
        onSuccess: () => {
          // Reset form fields to initial state after successful mutation
          reset({
            id: '',
            title: '',
            author: '',
            pages: '',
            status: '',
          });
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ID */}
          <Controller
            name="id"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Label htmlFor="id" className="text-right">
                ID
                <Input {...field} className="col-span-3" />
                {errors.id && <p>ID is required.</p>}
              </Label>
            )}
          />
          {/* Title */}
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Title is required' }}
            render={({ field }) => (
              <Label htmlFor="title" className="text-right">
                Title
                <Input {...field} className="col-span-3" />
                {errors.title && <p>{errors.title.message}</p>}
              </Label>
            )}
          />
          {/* Author */}
          <Controller
            name="author"
            control={control}
            rules={{ required: 'Author is required' }}
            render={({ field }) => (
              <Label htmlFor="author" className="text-right">
                Author
                <Input {...field} className="col-span-3" />
                {errors.author && <p>{errors.author.message}</p>}
              </Label>
            )}
          />
          {/* Pages */}
          <Controller
            name="pages"
            control={control}
            rules={{ required: 'Pages is required' }}
            render={({ field }) => (
              <Label htmlFor="pages" className="text-right">
                Pages
                <Input {...field} type="number" className="col-span-3" />
                {errors.pages && <p>{errors.pages.message}</p>}
              </Label>
            )}
          />
          {/* Status */}
          <Controller
            name="status"
            control={control}
            rules={{ required: 'Status is required' }}
            render={({ field }) => (
              <>
                <Label htmlFor="status" className="text-right">Status</Label>
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
                {errors.status && <p>{errors.status.message}</p>}
              </>
            )}
          />

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
