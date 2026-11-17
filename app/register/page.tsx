'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthShell from '@/components/AuthShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
export default function Register() {
  const r = useRouter();
  return (<AuthShell><Card className="w-full max-w-md"><CardHeader><CardTitle className="text-2xl">Create your account</CardTitle><CardDescription>Start finding and fixing your physics gaps.</CardDescription></CardHeader>
    <CardContent><form className="space-y-4" onSubmit={e => { e.preventDefault(); r.push('/onboarding'); }}>
      <div className="space-y-2"><Label htmlFor="name">Full name</Label><Input id="name" placeholder="Your name" required /></div>
      <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="you@school.com" required /></div>
      <div className="grid grid-cols-2 gap-3"><div className="space-y-2"><Label htmlFor="cls">Class</Label><Input id="cls" defaultValue="Class 11" /></div><div className="space-y-2"><Label htmlFor="board">Board</Label><Input id="board" placeholder="e.g. HSC" /></div></div>
      <div className="grid grid-cols-2 gap-3"><div className="space-y-2"><Label htmlFor="pw">Password</Label><Input id="pw" type="password" required /></div><div className="space-y-2"><Label htmlFor="pw2">Confirm</Label><Input id="pw2" type="password" required /></div></div>
      <Button type="submit" className="w-full">Create account</Button>
      <p className="text-center text-xs text-muted-foreground">By registering you agree to the Terms and Privacy Policy (draft).</p>
      <p className="text-center text-sm text-muted-foreground">Already have an account? <Link href="/login" className="font-semibold text-primary">Login</Link></p></form></CardContent></Card></AuthShell>);
}
