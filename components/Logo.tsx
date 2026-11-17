import Link from 'next/link';
import { Atom } from 'lucide-react';
export default function Logo() { return <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-wide"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-[0_0_20px_hsl(258_90%_66%/.6)]"><Atom className="h-4 w-4" /></span>SolMind AI</Link>; }
