import * as React from 'react';
import { cn } from '@/lib/utils';
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...p }, ref) => <div ref={ref} className={cn('rounded-2xl border border-white/10 bg-card/80 text-card-foreground', className)} {...p} />);
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...p }, ref) => <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...p} />);
const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...p }, ref) => <div ref={ref} className={cn('font-display font-semibold leading-none tracking-tight', className)} {...p} />);
const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...p }, ref) => <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...p} />);
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...p }, ref) => <div ref={ref} className={cn('p-6 pt-0', className)} {...p} />);
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...p }, ref) => <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...p} />);
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
