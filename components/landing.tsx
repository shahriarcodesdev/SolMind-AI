import { cn } from '@/lib/utils';
export const Grad = ({ children }: { children: React.ReactNode }) => <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">{children}</span>;
export const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">{children}</p>;
export const Connector = ({ h = 20 }: { h?: number }) => <div className="mx-auto flex flex-col items-center" style={{ height: h * 4 }}><span className="h-1.5 w-1.5 rounded-full bg-violet-400/70" /><span className="w-px flex-1 border-l border-dashed border-white/20" /><span className="h-1.5 w-1.5 rounded-full bg-violet-400/70" /></div>;
export function Orb() {
  const lat = [-105, -70, -35, 0, 35, 70, 105];
  return (<svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true"><defs><radialGradient id="og" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#8b5cf6" stopOpacity=".55" /><stop offset="1" stopColor="#8b5cf6" stopOpacity="0" /></radialGradient></defs>
    <circle cx="200" cy="200" r="195" fill="url(#og)" />
    <g fill="none" stroke="#a78bfa" strokeOpacity=".55" strokeWidth="1"><circle cx="200" cy="200" r="150" />{[130, 95, 55, 20].map(r => <ellipse key={r} cx="200" cy="200" rx={r} ry="150" />)}{lat.map(y => { const rx = Math.sqrt(150 * 150 - y * y); return <ellipse key={y} cx="200" cy={200 + y} rx={rx} ry={rx * 0.16} />; })}</g>
    {[[120, 120], [275, 150], [170, 265], [250, 250], [200, 90]].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#ddd6fe" />)}</svg>);
}
export function Phone({ children, className }: { children: React.ReactNode; className?: string }) {
  return (<div className={cn('relative mx-auto w-[250px] rounded-[2.6rem] border border-white/15 bg-[#0c0916] p-2 shadow-[0_0_70px_-12px_hsl(258_90%_66%/.55)]', className)}><div className="absolute left-1/2 top-3.5 h-5 w-20 -translate-x-1/2 rounded-full bg-black" /><div className="min-h-[460px] rounded-[2.1rem] bg-gradient-to-b from-[#150f2b] to-[#09060f] px-4 pb-6 pt-12 text-left">{children}</div></div>);
}
