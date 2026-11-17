'use client';
import { useState } from 'react';
import Link from 'next/link';
import Head from '@/components/Head';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useDemo, QUESTIONS } from '@/lib/demo';
export default function Diagnostic() {
  const d = useDemo(); const Q = QUESTIONS[d.mode === 'advanced' ? 'advanced' : 'practice'];
  const [val, setVal] = useState(''); const [work, setWork] = useState(''); const [fb, setFb] = useState<any>(null); const [h, setH] = useState(0);
  function submit() {
    const x = parseFloat(val.replace(/[^0-9.\-]/g, ''));
    if (isNaN(x)) { setFb({ kind: 'none', text: 'Please enter a number.' }); return; }
    if (Math.abs(x - Q.answer) < 0.05) { d.submit('correct', h); setFb({ kind: 'ok', text: `Correct. ${Q.solution}${h ? ' You used hints, so the mastery gain is smaller.' : ' No hints used, so mastery improved fully.'}` }); }
    else if (Math.abs(x - Q.wrong.value) < 0.05) { d.submit('concept', h); setFb({ kind: 'gap', text: Q.wrong.note, tag: Q.wrong.mis, q: Q.followup }); }
    else { d.submit('math', h); setFb({ kind: 'math', text: 'Not quite, and no known mistake pattern matches. Check your arithmetic and units.' }); }
  }
  return (<><Head title="Diagnostic assessment" sub={`Question 1 · ${d.mode === 'advanced' ? 'Analyze · Advanced' : 'Apply · Medium'}`} />
    <div className="grid gap-4 lg:grid-cols-2">
      <Card><CardHeader><CardTitle className="text-xl leading-snug">{Q.text}</CardTitle></CardHeader><CardContent className="space-y-3"><Input placeholder="Answer, e.g. 6" value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} /><Textarea rows={3} placeholder="Show your working (optional)" value={work} onChange={e => setWork(e.target.value)} />
        <div className="flex gap-3"><Button onClick={submit}>Submit</Button><Button variant="outline" onClick={() => { if (h < 3) { d.useHint(); setH(h + 1); } }}>Hint {Math.min(h + 1, 3)} of 3</Button></div>
        {h > 0 && <div className="space-y-1 rounded-lg bg-amber-400/10 p-3 text-sm">{Q.hints.slice(0, h).map((t: string, i: number) => <div key={i}><b>Hint {i + 1}:</b> {t}</div>)}</div>}</CardContent></Card>
      <Card><CardHeader><CardTitle>Evidence</CardTitle><CardDescription>One wrong answer never proves a misconception.</CardDescription></CardHeader><CardContent className="space-y-3 text-sm">
        {!fb && <p className="text-muted-foreground">Submit an answer to see how SolMind reads it. Try {Q.wrong.value} to see a gap detected.</p>}
        {fb?.kind === 'gap' && <><Badge className="bg-amber-400 text-amber-950">Suspected · not confirmed</Badge><p>{fb.text}</p><p className="text-muted-foreground">{fb.tag}</p><div className="rounded-lg bg-secondary/30 p-3"><div className="text-xs font-bold uppercase tracking-wider text-primary">Follow-up question</div>{fb.q}</div><Button asChild variant="outline" size="sm"><Link href="/tutor">Continue with the tutor</Link></Button></>}
        {fb?.kind === 'ok' && <><Badge className="bg-emerald-600 text-white">Correct</Badge><p>{fb.text}</p><Button asChild size="sm"><Link href="/knowledge-map">See knowledge map</Link></Button></>}
        {(fb?.kind === 'math' || fb?.kind === 'none') && <p>{fb.text}</p>}</CardContent></Card></div></>);
}
