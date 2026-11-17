'use client';
import { useState } from 'react';
import Head from '@/components/Head';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDemo, TOPICS, EDGES, status } from '@/lib/demo';
const px = (c: number) => 50 + c * 118;
export default function KnowledgeMap() {
  const d = useDemo(); const [sel, setSel] = useState('T08'); const t = TOPICS.find(x => x[0] === sel)!; const s = status(sel, d.sc);
  const pre = EDGES.filter(e => e[1] === sel).map(e => TOPICS.find(x => x[0] === e[0])![2]); const P = (id: string) => TOPICS.find(x => x[0] === id)!;
  return (<><Head title="Knowledge map" sub="Click a topic to inspect mastery and prerequisites" />
    <Card><CardContent className="space-y-4 overflow-x-auto p-6"><svg viewBox="0 0 860 380" width="100%" style={{ minWidth: 640 }}>
      {EDGES.map(([a, b]) => <line key={a + b} x1={px(P(a)[3]) + 42} y1={P(a)[4]} x2={px(P(b)[3]) - 42} y2={P(b)[4]} stroke="#5b4d99" strokeWidth="1.5" />)}
      {TOPICS.map(n => <g key={n[0]} className="cursor-pointer" onClick={() => setSel(n[0])}><rect x={px(n[3]) - 42} y={n[4] - 16} width="84" height="32" rx="10" fill={status(n[0], d.sc).color} stroke={sel === n[0] ? '#ffffff' : 'none'} strokeWidth="3" /><text x={px(n[3])} y={n[4] + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill={status(n[0], d.sc).label === 'Developing' ? '#2a1d00' : '#fff'}>{n[1]}</text></g>)}</svg>
      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">{[['Mastered', '#2e9e5b'], ['Developing', '#f5a623'], ['Weak', '#d64545'], ['Not assessed', '#8a8f98'], ['Current target', '#3b7ddd']].map(([a, c]) => <span key={a} className="flex items-center gap-1.5"><i className="h-3 w-3 rounded-full" style={{ background: c }} />{a}</span>)}</div></CardContent></Card>
    <Card><CardHeader><CardTitle>{t[2]} · {s.label}</CardTitle><CardDescription>{d.sc[sel] != null ? `Mastery ${Math.round(d.sc[sel] * 100)}%` : 'No evidence yet'} · Needs: {pre.length ? pre.join(', ') : 'none (starting topic)'}</CardDescription></CardHeader></Card></>);
}
