'use client';
import { useState } from 'react';
import Head from '@/components/Head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useDemo } from '@/lib/demo';
type Node = { t: string; o: { l: string; next: string; good?: boolean }[] };
const S: Record<string, Node> = {
  z0: { t: 'A force is a push or a pull that can change an object’s motion. Think of pushing a shopping trolley. What changes when you push it?', o: [{ l: 'Its motion', next: 'z1', good: true }, { l: 'Nothing', next: 'z0b' }] },
  z0b: { t: 'Look again: the trolley starts moving. The push changed its motion. What changed?', o: [{ l: 'Its motion', next: 'z1', good: true }] },
  z1: { t: 'Right. Mass is how much matter an object has, and acceleration is how fast velocity changes. Newton’s Second Law links them: Fnet = ma. Ready for a worked problem?', o: [{ l: 'Yes, let’s try', next: 'a0' }] },
  a0: { t: 'A 5 kg block is pushed with 30 N and friction is 10 N. Which forces act on the block?', o: [{ l: 'The 30 N push and 10 N friction', next: 'a1', good: true }, { l: 'Only the 30 N push', next: 'a0b' }] },
  a0b: { t: 'Is anything acting against the push along the surface?', o: [{ l: 'Yes, friction of 10 N', next: 'a1', good: true }] },
  a1: { t: 'Good. Friction opposes the push. What is the net force?', o: [{ l: '20 N', next: 'a2', good: true }, { l: '40 N', next: 'a1b' }] },
  a1b: { t: 'Friction acts against the push, so subtract it. Try 30 − 10.', o: [{ l: '20 N', next: 'a2', good: true }] },
  a2: { t: 'Yes: Fnet = 30 − 10 = 20 N. Now a = Fnet ÷ m. What is a?', o: [{ l: '4 m/s²', next: 'end', good: true }, { l: '6 m/s²', next: 'a2b' }] },
  a2b: { t: '6 would be 30 ÷ 5, which ignores friction. Use the net force, 20 N, divided by 5 kg.', o: [{ l: '4 m/s²', next: 'end', good: true }] },
  end: { t: 'Correct: a = 20 ÷ 5 = 4 m/s². Net Force and Friction both improved on your map.', o: [] },
};
export default function Tutor() {
  const d = useDemo(); const start = d.mode === 'zero' ? 'z0' : 'a0';
  const [log, setLog] = useState<{ w: 't' | 'u'; s: string }[]>([{ w: 't', s: S[start].t }]); const [cur, setCur] = useState(start); const [wrong, setWrong] = useState(0);
  function pick(o: Node['o'][number]) { const n = S[o.next]; if (!o.good) setWrong(w => w + 1); if (o.next === 'end') d.bump(['T08', 'T14'], wrong ? .6 : 1); setLog(l => [...l, { w: 'u', s: o.l }, { w: 't', s: n.t }]); setCur(o.next); }
  return (<><Head title="AI Tutor" sub={`Topic: Newton’s Second Law · Mode: ${d.mode === 'zero' ? 'Learn from Zero' : d.mode === 'advanced' ? 'Advanced' : 'Practice & Improve'}`} />
    <Card><CardContent className="flex min-h-[340px] flex-col gap-3 p-6">{log.map((m, i) => <div key={i} className={cn('max-w-xl rounded-2xl px-4 py-3 text-sm', m.w === 't' ? 'self-start bg-muted' : 'self-end bg-secondary')}>{m.s}</div>)}</CardContent>
      <CardFooter className="flex-wrap gap-2">{S[cur].o.map(o => <Button key={o.l} variant="outline" size="sm" onClick={() => pick(o)}>{o.l}</Button>)}<p className="w-full pt-2 text-xs text-muted-foreground">Scripted demo tutor. The full version will use an LLM with curriculum retrieval and validated output.</p></CardFooter></Card></>);
}
