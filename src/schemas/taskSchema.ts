import { z } from 'zod';

const onlyWhitespace = /^\s*$/;
const onlyCode = /^[a-zA-Z0-9_]+$/;
const onlySpecial = /^[^a-zA-Z0-9]+$/;

export const taskFormSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(100, 'Title is too long')
    .refine((val) => !onlyWhitespace.test(val), {
      message: 'Title cannot be only whitespace',
    })
    .refine((val) => !onlyCode.test(val), {
      message: 'Title cannot be only code',
    })
    .refine((val) => !onlySpecial.test(val), {
      message: 'Title cannot be only special characters',
    }),
  description: z.string().max(500, 'Description is too long').optional(),
  dueDate: z.string()
    .min(1, 'Due date is required')
    .refine((val) => {
      const today = new Date();
      today.setHours(0,0,0,0);
      const selected = new Date(val);
      selected.setHours(0,0,0,0);
      return selected >= today;
    }, {
      message: 'Due date cannot be before today',
    }),
  isImportant: z.boolean(),
  isCompleted: z.boolean(),
});

export type TaskFormData = z.infer<typeof taskFormSchema>; 