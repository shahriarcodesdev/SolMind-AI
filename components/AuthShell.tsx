import Link from 'next/link';
import Logo from './Logo';
import { Check } from 'lucide-react';
import { Orb } from './landing';
export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (<div className="grid min-h-screen lg:grid-cols-2">
    <div className="relative hidden flex-col justify-between overflow-hidden border-r border-white/10 bg-[radial-gradient(ellipse_at_50%_100%,hsl(258_90%_66%/.35),transparent_65%)] p-12 lg:flex"><Logo />
      <div className="pointer-events-none absolute left-1/2 top-1/2 w-[520px] -translate-x-1/2 -translate-y-[60%] opacity-70"><Orb /></div>
      <div className="relative space-y-5"><p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300">Class 11 Physics</p><h2 className="max-w-md font-display text-4xl font-semibold leading-tight">Find the hidden gap behind every wrong answer.</h2>
        <ul className="space-y-3 text-sm text-white/75">{['Prerequisite knowledge map', 'Socratic hints, not shortcuts', 'Progress you can see'].map(t => <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-violet-300" />{t}</li>)}</ul></div>
      <p className="relative text-xs text-white/50">Demo prototype · simulated data</p></div>
    <div className="flex flex-col"><div className="flex justify-between p-6 lg:justify-end"><div className="lg:hidden"><Logo /></div><Link href="/" className="text-sm text-muted-foreground hover:text-white">Back to home</Link></div>
      <div className="flex flex-1 items-center justify-center p-6 pb-16">{children}</div></div></div>);
}
