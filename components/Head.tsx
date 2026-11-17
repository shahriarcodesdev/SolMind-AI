import { Badge } from '@/components/ui/badge';
export default function Head({ title, sub }: { title: string; sub: string }) {
  return (<div className="flex flex-wrap items-center justify-between gap-3"><div><h1 className="text-3xl font-bold tracking-tight">{title}</h1><p className="text-muted-foreground">{sub}</p></div><Badge variant="outline" className="border-amber-400/60 text-amber-300">Demo data · guest profile</Badge></div>);
}
