import { z } from 'zod';

import { ERROR_MESSAGES } from './constants';

export const formScheme = z.object({
  email: z
    .string()
    .min(1, { message: ERROR_MESSAGES.email.required })
    .max(320, { message: ERROR_MESSAGES.email.exceed })
    .refine(
      (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? ''),
      ERROR_MESSAGES.email.invalid
    ),
  password: z
    .string()
    .min(1, { message: ERROR_MESSAGES.password.required })
    .max(50, { message: ERROR_MESSAGES.password.exceed })
    .refine((password) => !/\s/.test(password), ERROR_MESSAGES.password.spaces)
});

export type FormScheme = z.infer<typeof formScheme>;
