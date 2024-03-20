import { z } from "zod";

export const formSchemaAddBook = z.object({
 id: z.string().min(2, {
   message: 'ID must be at least 2 characters.',
 }),
 title: z.string().min(6, {
   message: 'Title must be at least 6 characters.',
 }),
 author: z.string().min(6, {
   message: 'Author must be at least 6 characters.',
 }),
 pages: z.coerce.number().min(2, {
   message: 'Pages must be at least 2 characters.',
 }),
 status: z.string().min(2, {
   message: 'Status must be selected',
 }),
});