import { Loader } from './loader';

import { cn } from '@/shared/utils/classnames';

type ButtonVariant = 'primary';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

export const Button = ({
  variant = 'primary',
  className,
  isLoading,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={cn(
      className,
      'flex h-12 min-w-40 items-center justify-center rounded-full px-10 text-center md:h-14',
      {
        primary: 'bg-blue-600 hover:bg-blue-500'
      }[variant],
      isLoading && 'hover:bg-blue-600'
    )}
    disabled={isLoading}
    {...props}
  >
    {isLoading ? (
      <Loader className="h-7 w-7 animate-spin fill-gray-200 text-blue-900" />
    ) : (
      <span className="text-md font-medium text-white md:text-lg">
        {children}
      </span>
    )}
  </button>
);
