export const ERROR_MESSAGES = {
  email: {
    required: 'E-mail is required',
    invalid: 'Invalid e-mail',
    exceed: 'E-mail cannot exceed 320 characters'
  },
  password: {
    required: 'Password is required',
    exceed: 'Password cannot exceed 50 characters'
  }
} as const;
