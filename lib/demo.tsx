'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export const TOPICS = [
  ['T01','Algebra','Basic Algebra',0,60],['T02','Vectors','Vectors',0,170],['T03','Motion','Motion',0,290],
  ['T05','Force','Force',1,80],['T06','Mass','Mass & Inertia',1,170],['T04','Vel & Acc','Velocity & Acceleration',1,290],
  ['T07','1st Law','Newton’s First Law',2,120],['T08','Net Force','Net Force',2,230],
  ['T09','2nd Law','Newton’s Second Law',3,170],['T10','3rd Law','Newton’s Third Law',3,310],
  ['T11','FBD','Free Body Diagram',4,170],['T12','Weight','Weight & Normal Reaction',5,80],
  ['T13','Tension','Tension',5,170],['T14','Friction','Friction',5,290],['T15','Incline','Inclined Plane',6,170],
] as [string,string,string,number,number][];

export const EDGES: [string,string][] = [['T03','T04'],['T02','T04'],['T05','T07'],['T06','T07'],['T05','T08'],['T02','T08'],['T08','T09'],['T06','T09'],['T01','T09'],['T04','T09'],['T05','T10'],['T09','T11'],['T10','T11'],['T11','T12'],['T11','T13'],['T11','T14'],['T12','T15'],['T14','T15']];

const S0: Record<string, number> = { T01:.9,T02:.8,T03:.85,T04:.7,T05:.8,T06:.75,T07:.6,T08:.35,T10:.5,T12:.45,T14:.5 };

export const QUESTIONS: Record<string, any> = {
  practice: { topics:['T08','T14','T09'], text:'A 5 kg block is pushed horizontally with 30 N while 10 N of friction opposes the motion. Find the acceleration (m/s²).', answer:4, wrong:{ value:6, note:'30 ÷ 5 = 6. This suggests friction may have been left out of the net force.', mis:'M05 · Net force treated as only the applied force' }, followup:'Which forces act on the block?', hints:['Which forces act on the block? List them all.','Friction opposes the push. Fnet = 30 − ?','Fnet = 30 − 10 = 20 N. Now a = Fnet ÷ m.'], solution:'Fnet = 30 − 10 = 20 N, so a = 20 ÷ 5 = 4 m/s².' },
  advanced: { topics:['T15','T11','T09'], text:'A 10 kg block slides down a frictionless 30° incline. Find its acceleration (m/s²). Use g = 9.8 m/s².', answer:4.9, wrong:{ value:9.8, note:'9.8 equals g. This suggests the incline angle may have been ignored.', mis:'Gravity component along the incline not applied' }, followup:'Which component of weight acts along the incline?', hints:['Draw a free body diagram. Which components of weight are there?','The component along the slope is mg sin θ.','a = g sin 30° = 9.8 × 0.5.'], solution:'a = g sin 30° = 9.8 × 0.5 = 4.9 m/s².' },
};

type St = { mode:string; sc:Record<string,number>; conc:number; math:number; attempts:number; hints:number; done:boolean; hist:number[] };
const overall = (sc: Record<string,number>) => { const v = Object.values(sc); return Math.round(v.reduce((a,b)=>a+b,0)/v.length*100); };
const init = (): St => ({ mode:'practice', sc:{...S0}, conc:.58, math:.72, attempts:0, hints:0, done:false, hist:[overall(S0)] });

type Ctx = St & { overall:number; setMode:(m:string)=>void; submit:(kind:'correct'|'concept'|'math', hintsUsed:number)=>void; useHint:()=>void; bump:(ids:string[],o:number)=>void; reset:()=>void };
const C = createContext<Ctx>(null as any);
export const useDemo = () => useContext(C);

export function status(id: string, sc: Record<string,number>) {
  if (id === 'T09') return { color:'#3b7ddd', label:'Current target' };
  const s = sc[id];
  if (s == null) return { color:'#8a8f98', label:'Not assessed' };
  return s < .4 ? { color:'#d64545', label:'Weak' } : s < .75 ? { color:'#f5a623', label:'Developing' } : { color:'#2e9e5b', label:'Mastered' };
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const [s, setS] = useState<St>(init());
  const upd = (sc: Record<string,number>, ids: string[], o: number) => { const n = { ...sc }; ids.forEach(id => { const old = n[id] ?? .5; n[id] = old + .3 * (o - old); }); return n; };
  const value: Ctx = {
    ...s, overall: overall(s.sc),
    setMode: m => setS(p => ({ ...init(), mode: m })),
    useHint: () => setS(p => ({ ...p, hints: p.hints + 1 })),
    bump: (ids, o) => setS(p => { const sc = upd(p.sc, ids, o); return { ...p, sc, hist: [...p.hist, overall(sc)] }; }),
    submit: (kind, hintsUsed) => setS(p => {
      const ids = QUESTIONS[p.mode === 'advanced' ? 'advanced' : 'practice'].topics;
      const o = kind === 'correct' ? (hintsUsed === 0 ? 1 : .6) : 0;
      const sc = upd(p.sc, ids, o);
      return { ...p, sc, attempts: p.attempts + 1, done: kind === 'correct',
        conc: Math.min(1, Math.max(0, p.conc + (kind === 'correct' ? .15 : kind === 'concept' ? -.15 : 0))),
        math: Math.min(1, Math.max(0, p.math + (kind === 'correct' ? .1 : kind === 'math' ? -.1 : 0))),
        hist: [...p.hist, overall(sc)] };
    }),
    reset: () => setS(init()),
  };
  return <C.Provider value={value}>{children}</C.Provider>;
}
