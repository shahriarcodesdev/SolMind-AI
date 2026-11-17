'use client';
import Link from 'next/link';
import Head from '@/components/Head';
import Bar from '@/components/Bar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDemo, TOPICS, status } from '@/lib/demo';
export default function Dashboard() {
  const d = useDemo(); const mastered = TOPICS.filter(t => status(t[0], d.sc).label === 'Mastered').length;
  return (<><Head title="Welcome back, Sam" sub="Current target: Newton’s Second Law" />
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[['Overall mastery', `${d.overall}%`, 'text-violet-300'], ['Topics mastered', `${mastered} / ${TOPICS.length}`, 'text-emerald-400'], ['Hints used', `${d.hints}`, 'text-amber-400'], ['Attempts', `${d.attempts}`, 'text-blue-400']].map(([a, b, c]) => <Card key={a}><CardHeader className="pb-2"><CardDescription>{a}</CardDescription></CardHeader><CardContent><div className={`text-4xl font-bold ${c}`}>{b}</div></CardContent></Card>)}</div>
    <div className="grid gap-4 lg:grid-cols-2">
      <Card><CardHeader><CardTitle>Knowledge map preview</CardTitle><CardDescription>Colors show your current mastery</CardDescription></CardHeader><CardContent className="space-y-4"><div className="flex flex-wrap gap-2">{TOPICS.map(t => { const s = status(t[0], d.sc); return <Badge key={t[0]} style={{ background: s.color, color: s.label === 'Developing' ? '#2a1d00' : '#fff' }}>{t[1]}</Badge>; })}</div><Button asChild variant="outline" size="sm"><Link href="/knowledge-map">Open knowledge map</Link></Button></CardContent></Card>
      <Card><CardHeader><CardTitle>Conceptual vs mathematical</CardTitle><CardDescription>From your diagnostic evidence</CardDescription></CardHeader><CardContent className="space-y-5"><Bar label="Conceptual understanding" pct={d.conc * 100} color="#7b4dff" /><Bar label="Mathematical accuracy" pct={d.math * 100} color="#3b7ddd" /></CardContent></Card></div>
    <Card className="bg-gradient-to-br from-card to-primary/20"><CardHeader><CardTitle>Next step</CardTitle><CardDescription>{d.done ? 'Nice work. Review your analytics or try another path.' : 'Start the diagnostic to find your gaps.'}</CardDescription></CardHeader><CardContent><Button asChild><Link href="/assessment/diagnostic">{d.done ? 'Practice again' : 'Start diagnostic'}</Link></Button></CardContent></Card></>);
}
