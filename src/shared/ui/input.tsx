import { forwardRef } from 'react';

import { cn } from '@/shared/utils/classnames';

interface InputProps extends React.ComponentProps<'input'> {
  error?: string;
}

export const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => (
    <div className="flex flex-col gap-1">
      <input
        ref={ref}
        className={cn(
          'text-md h-14 rounded-2xl border border-gray-200 bg-gray-100 px-5 font-medium text-gray-950 outline-none placeholder:font-normal placeholder:text-gray-400 focus:border-gray-300 md:h-16 md:text-lg',
          className,
          error && 'border-error focus:border-error'
        )}
        {...props}
      />

      {error && <p className="text-xs text-error md:text-sm">{error}</p>}
    </div>
  )
);
