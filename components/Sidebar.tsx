'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Network, MessageSquare, ClipboardCheck, BarChart3, RotateCcw } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { useDemo } from '@/lib/demo';
import { cn } from '@/lib/utils';
const ITEMS = [['/dashboard', 'Dashboard', LayoutDashboard], ['/knowledge-map', 'Knowledge Map', Network], ['/tutor', 'AI Tutor', MessageSquare], ['/assessment/diagnostic', 'Assessments', ClipboardCheck], ['/analytics', 'Analytics', BarChart3]] as const;
export default function Sidebar() {
  const p = usePathname(); const { reset } = useDemo();
  return (<aside className="flex flex-row flex-wrap gap-1 border-b border-white/10 bg-card/40 p-4 md:min-h-screen md:w-64 md:flex-col md:border-b-0 md:border-r md:p-5">
    <div className="mb-4 w-full md:mb-8"><Logo /></div>
    {ITEMS.map(([h, l, Icon]) => <Link key={h} href={h} className={cn('flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-white', p.startsWith(h) && 'bg-primary/15 text-white ring-1 ring-primary/40')}><Icon className="h-4 w-4" />{l}</Link>)}
    <div className="mt-auto hidden w-full md:block"><Button variant="outline" size="sm" className="w-full" onClick={reset}><RotateCcw className="h-3.5 w-3.5" />Reset demo</Button></div></aside>);
}
