'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthShell from '@/components/AuthShell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
export default function Login() {
  const r = useRouter();
  return (<AuthShell><Card className="w-full max-w-md"><CardHeader><CardTitle className="text-2xl">Welcome back</CardTitle><CardDescription>Log in to continue your learning journey.</CardDescription></CardHeader>
    <CardContent><form className="space-y-4" onSubmit={e => { e.preventDefault(); r.push('/onboarding'); }}>
      <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="you@school.com" required /></div>
      <div className="space-y-2"><div className="flex items-center justify-between"><Label htmlFor="pw">Password</Label><span className="text-xs text-muted-foreground">Forgot password?</span></div><Input id="pw" type="password" placeholder="••••••••" required /></div>
      <Button type="submit" className="w-full">Login</Button>
      <div className="relative py-1 text-center text-xs text-muted-foreground"><span className="bg-card px-2">or</span></div>
      <Button type="button" variant="outline" className="w-full" onClick={() => r.push('/onboarding')}>Continue as demo guest</Button>
      <p className="text-center text-sm text-muted-foreground">New here? <Link href="/register" className="font-semibold text-primary">Create an account</Link></p>
      <p className="text-center text-xs text-muted-foreground">Demo only: no real account is created.</p></form></CardContent></Card></AuthShell>);
}
