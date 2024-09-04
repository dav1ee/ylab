import { useForm as useRHForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { mockFetch } from '@/shared/lib/mock-fetch';

import { formScheme, type FormScheme } from '../model/scheme';

export const useForm = () => {
  const form = useRHForm<FormScheme>({
    defaultValues: {
      email: '',
      password: ''
    },

    resolver: zodResolver(formScheme)
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      const response = await mockFetch('/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        const user = await response.json();
        console.log('Logged in user:', user);
      } else {
        const error = await response.json();
        console.error('Login error:', error);
      }

      form.reset();
    } catch (error) {
      console.error('Error:', error);
    }
  });

  return {
    onSubmit,
    register: form.register,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting
  };
};
