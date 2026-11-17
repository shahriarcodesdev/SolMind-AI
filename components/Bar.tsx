import { Progress } from '@/components/ui/progress';
export default function Bar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (<div className="space-y-2"><div className="flex justify-between text-sm font-medium"><span>{label}</span><span className="text-muted-foreground">{Math.round(pct)}%</span></div><Progress value={pct} color={color} /></div>);
}
