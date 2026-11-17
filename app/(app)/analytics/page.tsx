'use client';
import Head from '@/components/Head';
import Bar from '@/components/Bar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDemo, TOPICS, status } from '@/lib/demo';
export default function Analytics() {
  const d = useDemo(); const W = 420, H = 180, n = d.hist.length; const X = (i: number) => 10 + (n === 1 ? 0 : i * (W - 20) / (n - 1)); const Y = (v: number) => H - 10 - v * (H - 20) / 100;
  const rows = TOPICS.filter(t => d.sc[t[0]] != null).sort((a, b) => d.sc[a[0]] - d.sc[b[0]]).slice(0, 6);
  return (<><Head title="Learning analytics" sub="Sample data from the demo profile, not measured results" />
    <div className="grid gap-4 lg:grid-cols-2">
      <Card><CardHeader><CardTitle>Topic-wise mastery</CardTitle></CardHeader><CardContent className="space-y-4">{rows.map(t => <Bar key={t[0]} label={t[2]} pct={d.sc[t[0]] * 100} color={status(t[0], d.sc).color} />)}</CardContent></Card>
      <Card><CardHeader><CardTitle>Progress over time</CardTitle><CardDescription>Overall mastery {d.overall}% after {d.attempts} attempt(s)</CardDescription></CardHeader><CardContent><svg viewBox={`0 0 ${W} ${H}`} width="100%"><line x1="0" y1={H - 1} x2={W} y2={H - 1} stroke="#2a2150" /><polyline points={d.hist.map((v, i) => `${X(i)},${Y(v)}`).join(' ')} fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />{d.hist.map((v, i) => <circle key={i} cx={X(i)} cy={Y(v)} r="4" fill="#a78bfa" />)}</svg></CardContent></Card></div>
    <div className="grid gap-4 lg:grid-cols-2">
      <Card><CardHeader><CardTitle>Conceptual vs mathematical</CardTitle></CardHeader><CardContent className="space-y-4"><Bar label="Conceptual" pct={d.conc * 100} color="#7b4dff" /><Bar label="Mathematical" pct={d.math * 100} color="#3b7ddd" /></CardContent></Card>
      <Card><CardHeader><CardTitle>Accuracy by difficulty</CardTitle><CardDescription>Sample data</CardDescription></CardHeader><CardContent className="space-y-4">{[['Easy', 90], ['Medium', 55], ['Advanced', 30], ['Expert', 10]].map(([a, p]) => <Bar key={a as string} label={a as string} pct={p as number} color="#3b7ddd" />)}</CardContent></Card></div></>);
}
