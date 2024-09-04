import { useForm } from '../hooks/use-form';

import { Input, Button } from '@/shared/ui';

export const AuthForm = () => {
  const { onSubmit, register, errors, isSubmitting } = useForm();

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-md space-y-4 rounded-3xl bg-white p-10"
    >
      <h1 className="text-center text-2xl">Auth</h1>

      <Input
        placeholder="E-mail"
        {...register('email')}
        {...(errors.email && {
          error: errors.email.message
        })}
      />

      <Input
        placeholder="Password"
        type="password"
        {...register('password')}
        {...(errors.password && {
          error: errors.password.message
        })}
      />

      <Button isLoading={isSubmitting}>Submit</Button>
    </form>
  );
};
