import Link from 'next/link';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
export default function PublicNav() {
  return (<nav className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5"><Logo />
    <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"><Link href="/#how" className="hover:text-white">How it works</Link><Link href="/#features" className="hover:text-white">Features</Link><Link href="/#paths" className="hover:text-white">Paths</Link><Link href="/#faq" className="hover:text-white">FAQ</Link></div>
    <div className="flex items-center gap-2"><Button asChild variant="ghost" size="sm"><Link href="/login">Login</Link></Button><Button asChild size="sm"><Link href="/register">Get started</Link></Button></div></div></nav>);
}
