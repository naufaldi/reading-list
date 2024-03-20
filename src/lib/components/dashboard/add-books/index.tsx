'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

import { useForm, Controller } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/lib/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/components/ui/dialog';
import { Button } from '@/lib/components/ui/button';
import { Input } from '@/lib/components/ui/input';
import { Label } from '@/lib/components/ui/label';
import { useAddBookMutation } from '@/lib/hooks/useAddBookMutation';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/lib/components/ui/form';
import { generateId } from '@/lib/utils/generateID';
import { formSchemaAddBook } from '@/lib/schema/book';
import { useToast } from '@/lib/components/ui/use-toast';
import { motion } from 'framer-motion';
import { FadeInTop } from '@/lib/animation/fadeIn';



export function AddBooks() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { toast } = useToast()
  const [defaultValues] = useState({
    id: generateId(),
    title: '',
    author: '',
    pages: 0,
    status: '',
  });
  const form = useForm<z.infer<typeof formSchemaAddBook>>({
    resolver: zodResolver(formSchemaAddBook),
    defaultValues
  });
  const resetForm = () => {
    form.reset({
      ...defaultValues,
      id: generateId()
    });
  };
  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.75, transition: { duration: 0.3 } }
  };
  const addBookMutation = useAddBookMutation();

  const onSubmit = async (values: z.infer<typeof formSchemaAddBook>) => {
    await addBookMutation.mutateAsync(
      {
        ...values,
      },
      {
        onSuccess: () => {
          form.reset();
          toast({
            title: "Success Add",
            description: "Book Added successfully",
            variant: "success",
          })
        },
        onError: (error) => {
          toast({
            title: "Fail Add",
            description: `Book Failed to Add, ${error.message}`,
            variant: "destructive",          
          })
        },
      }
    );
  };
  
  return (
    <Dialog onOpenChange={resetForm}>
      <DialogTrigger asChild>
        <Button variant="outline" >Add Books</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <motion.div
          initial={{ y: -20, scaleX: 0.8 }}
          animate={{ y: 0, scaleX: 1 }}
          className="dialog-body"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.15
            }}
          >
              
        <DialogHeader>
          <DialogTitle>Add Book</DialogTitle>
          <DialogDescription>
            Enter book details and click save.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <motion.form
          variants={FadeInTop}
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            {/* ID */}
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID</FormLabel>
                  <FormControl>
                    <Input placeholder="your book id here.."   disabled {...field} />
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
              name="author"
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
              name="pages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pages</FormLabel>
                  <FormControl>
                    <Input placeholder="your book pages here.." type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Status */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      value={field?.value}
                      defaultValue={field?.value}
                      onValueChange={(val) => field.onChange(val)}
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
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </motion.form>
        </Form>
        </motion.div>
            </motion.div>
      </DialogContent>
    </Dialog>
  );
}
