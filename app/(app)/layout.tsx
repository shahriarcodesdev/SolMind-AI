import Sidebar from '@/components/Sidebar';
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (<div className="flex min-h-screen flex-col md:flex-row"><Sidebar /><main className="flex-1 space-y-6 bg-[radial-gradient(ellipse_at_top,hsl(258_90%_66%/.14),transparent_55%)] p-6 md:p-10">{children}</main></div>);
}
