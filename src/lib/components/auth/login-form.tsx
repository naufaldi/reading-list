import { cn } from '@/lib/styles/utils';
import React from 'react';
import { buttonVariants } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
const LoginForm = ({ className, ...props }: UserAuthFormProps) => {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              // disabled={isLoading || isGitHubLoading}
              // {...register("email")}
            />
            {/* {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )} */}
          </div>
          <button className={cn(buttonVariants())}>
            {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
            Sign In with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
