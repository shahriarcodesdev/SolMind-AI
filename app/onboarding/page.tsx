'use client';
import { useRouter } from 'next/navigation';
import { Sprout, Compass, Rocket } from 'lucide-react';
import PublicNav from '@/components/PublicNav';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDemo } from '@/lib/demo';
const MODES = [['zero', 'Learn from Zero', 'Start with force, mass and acceleration using everyday examples.', Sprout, '/tutor'], ['practice', 'Practice & Improve', 'Take a diagnostic, then fix specific gaps with Socratic help.', Compass, '/assessment/diagnostic'], ['advanced', 'Advanced Challenge', 'Verify mastery, skip basics and solve multi-step problems.', Rocket, '/assessment/diagnostic']] as const;
export default function Onboarding() {
  const r = useRouter(); const { setMode } = useDemo();
  return (<><PublicNav /><section className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 pb-20 pt-10 text-center"><h1 className="text-4xl font-bold tracking-tight">How do you want to learn today?</h1><p className="text-muted-foreground">Your choice sets the first step. Mastery is always verified by a quick check.</p>
    <div className="grid w-full gap-6 md:grid-cols-3">{MODES.map(([k, t, d, Icon, href]) => <button key={k} onClick={() => { setMode(k); r.push(href); }} className="text-left"><Card className="h-full transition-colors hover:border-primary"><CardHeader><div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary"><Icon className="h-6 w-6" /></div><CardTitle className="text-xl">{t}</CardTitle><CardDescription>{d}</CardDescription></CardHeader></Card></button>)}</div>
    <Badge variant="muted">Chapter: Newton’s Laws of Motion · Class 11</Badge></section></>);
}
