import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const badgeVariants = cva('inline-flex items-center rounded-full border border-transparent px-3 py-0.5 text-xs font-semibold transition-colors', { variants: { variant: { default: 'bg-primary text-primary-foreground', secondary: 'bg-secondary text-secondary-foreground', outline: 'border-white/30 text-foreground', muted: 'bg-muted text-foreground' } }, defaultVariants: { variant: 'default' } });
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}
function Badge({ className, variant, ...p }: BadgeProps) { return <div className={cn(badgeVariants({ variant }), className)} {...p} />; }
export { Badge, badgeVariants };
