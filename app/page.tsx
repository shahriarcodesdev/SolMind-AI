import Link from "next/link";
import {
  Atom,
  Check,
  ChevronRight,
  Network,
  ScanSearch,
  MessageCircleQuestion,
  Calculator,
  LineChart,
  Layers,
  Plus,
} from "lucide-react";
import PublicNav from "@/components/PublicNav";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Grad, Eyebrow, Connector, Orb, Phone } from "@/components/landing";

const STEPS = [
  [
    "Set your goal",
    "Pick Learn from Zero, Practice & Improve or Advanced Challenge. Your choice sets the first step, never your level.",
  ],
  [
    "Diagnose what you know",
    "Short checks across the prerequisite chain reveal what is solid and what is missing.",
  ],
  [
    "Learn with a Socratic tutor",
    "Hints and questions at your level, with real-life examples for beginners.",
  ],
  [
    "See your progress",
    "Your knowledge map and analytics update with every answer.",
  ],
];
const TOPICS = [
  "Force",
  "Mass & Inertia",
  "Newton’s First Law",
  "Net Force",
  "Newton’s Second Law",
  "Newton’s Third Law",
  "Free Body Diagrams",
  "Weight & Normal Reaction",
  "Tension",
  "Friction",
  "Inclined Plane",
  "Vectors",
];
const FAQ = [
  [
    "What is SolMind AI?",
    "An adaptive Physics tutor for Class 11 that finds knowledge gaps, explains them with questions and tracks progress on a prerequisite map. This site is an interactive demo.",
  ],
  [
    "Which topics are covered?",
    "The first release focuses on Newton’s Laws of Motion, from force and mass to friction and inclined planes.",
  ],
  [
    "Does it just give me answers?",
    "No. In guided mode it asks questions and reveals hints step by step, and it records hint use as part of your evidence.",
  ],
  [
    "How does gap detection work?",
    "It compares your answer and working with known mistake patterns, then asks a follow-up before it calls anything a confirmed misconception.",
  ],
  [
    "Is the data in the demo real?",
    "No. The demo uses a sample student and scripted tutoring. Real learning results will only be reported after testing with real students.",
  ],
];

export default function Landing() {
  return (
    <div className="overflow-x-hidden">
      <PublicNav />

      {/* HERO */}
      <header className="relative px-6 pt-20 text-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_at_50%_30%,hsl(258_90%_66%/.18),transparent_60%)]" />
        <Badge
          variant="outline"
          className="relative border-white/15 bg-white/[0.04] text-violet-200"
        >
          Class 11 Physics · Newton’s Laws
        </Badge>
        <h1 className="relative mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Learn physics
          <br />
          <Grad>with your AI tutor.</Grad>
        </h1>
        <p className="relative mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          SolMind finds the hidden gap behind a wrong answer, then guides you
          with questions instead of shortcuts, so every minute of practice
          counts.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/onboarding">Start the demo</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#how">See how it works</Link>
          </Button>
        </div>
        <div className="relative mx-auto mt-10 h-[340px] w-[340px] md:h-[440px] md:w-[440px]">
          <Orb />
          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500 to-indigo-700 shadow-[0_0_80px_hsl(258_90%_66%/.8)]">
            <Atom className="h-9 w-9" />
          </div>
        </div>
      </header>
      <Connector />

      {/* STATEMENT */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-[2rem] border border-white/10 px-6 py-14 text-center md:px-16 md:py-20">
          {[
            "left-0 top-0 border-l border-t rounded-tl-[2rem]",
            "right-0 top-0 border-r border-t rounded-tr-[2rem]",
            "left-0 bottom-0 border-l border-b rounded-bl-[2rem]",
            "right-0 bottom-0 border-r border-b rounded-br-[2rem]",
          ].map((c) => (
            <span
              key={c}
              className={`absolute h-10 w-10 border-violet-400/60 ${c}`}
            />
          ))}
          <p className="font-display text-3xl font-medium leading-snug tracking-tight md:text-5xl md:leading-[1.15]">
            A safe space for real practice. No pressure, no guessing. Work with
            an AI tutor that adapts to you,{" "}
            <span className="text-white/35">
              and grow with every problem you solve.
            </span>
          </p>
        </div>
      </section>
      <Connector />

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
            Start learning confidently in four steps
          </h2>
        </div>
        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-2">
            {STEPS.map(([t, d], i) => (
              <div
                key={t}
                className={`rounded-xl border-l-2 px-5 py-4 transition-colors ${i === 0 ? "border-violet-400 bg-white/[0.03]" : "border-white/10"}`}
              >
                <p className="font-display text-xs text-violet-300">0{i + 1}</p>
                <h3
                  className={`text-lg font-semibold ${i === 0 ? "" : "text-white/70"}`}
                >
                  {t}
                </h3>
                <p
                  className={`mt-1 text-sm ${i === 0 ? "text-muted-foreground" : "text-white/35"}`}
                >
                  {d}
                </p>
              </div>
            ))}
          </div>
          <Phone>
            <p className="text-xs text-muted-foreground">Step 1 of 4</p>
            <h3 className="mt-2 text-xl font-semibold leading-tight">
              What’s your goal for learning physics?
            </h3>
            <div className="mt-5 space-y-2.5 text-sm">
              {[
                "Understand Newton’s Laws",
                "Prepare for an exam",
                "Strengthen my basics",
                "Solve harder problems",
              ].map((x, i) => (
                <div
                  key={x}
                  className={`rounded-xl border px-3.5 py-3 ${i === 0 ? "border-violet-400 bg-violet-500/15" : "border-white/10 bg-white/[0.03]"}`}
                >
                  {x}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-primary py-2.5 text-center text-sm font-semibold">
              Continue
            </div>
          </Phone>
        </div>
      </section>
      <Connector />

      {/* SIGNATURE FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center">
          <Eyebrow>Signature features</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
            What makes SolMind <Grad>different</Grad>
          </h2>
        </div>
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <Badge className="bg-violet-500/20 text-violet-200">
              Gap detection
            </Badge>
            <h3 className="text-3xl font-semibold leading-tight">
              Mistakes, <Grad>actually explained</Grad>
            </h3>
            <p className="text-muted-foreground">
              Submit an answer and your working. SolMind checks it against known
              mistake patterns and asks what you were thinking before it labels
              anything.
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                "Separates conceptual from mathematical errors",
                "Follow-up question before any diagnosis",
                "Evidence is stored, so results are explainable",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-violet-300" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Phone>
            <Badge className="bg-amber-400 text-amber-950">
              Suspected · not confirmed
            </Badge>
            <p className="mt-4 text-sm text-white/80">
              Your answer of 6 m/s² equals 30 ÷ 5. Friction may have been left
              out of the net force.
            </p>
            <div className="mt-4 rounded-xl border border-violet-400/40 bg-violet-500/10 p-3 text-sm">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-violet-300">
                Follow-up
              </p>
              Which forces act on the block?
            </div>
          </Phone>
        </div>
        <div className="mt-24 grid items-center gap-12 md:grid-cols-2">
          <Phone className="md:order-first">
            <div className="grid grid-cols-3 gap-2 pt-2">
              {[
                ["Force", "bg-emerald-600"],
                ["Mass", "bg-emerald-600"],
                ["Net", "bg-red-500"],
                ["2nd Law", "bg-blue-500"],
                ["Friction", "bg-amber-400 text-amber-950"],
                ["FBD", "bg-slate-500"],
              ].map(([t, c]) => (
                <span
                  key={t}
                  className={`rounded-lg px-2 py-2 text-center text-[11px] font-semibold ${c}`}
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm">
              <b>Net Force · Weak</b>
            </p>
            <p className="text-xs text-muted-foreground">
              Needs: Force, Vectors
            </p>
          </Phone>
          <div className="space-y-4">
            <Badge className="bg-violet-500/20 text-violet-200">
              Prerequisite map
            </Badge>
            <h3 className="text-3xl font-semibold leading-tight">
              Tap a topic. <Grad>Know why instantly.</Grad>
            </h3>
            <p className="text-muted-foreground">
              Every concept is linked to the ones it depends on, colored by what
              you have actually shown, never by what you claim.
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                "Mastered, Developing, Weak, Not assessed, Target",
                "Click any node for score and prerequisites",
                "Updates live as you answer",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-violet-300" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Connector />

      {/* FEATURE GRID */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mx-auto max-w-xl text-center text-4xl font-semibold tracking-tight md:text-5xl">
          Everything you need to <Grad>master physics</Grad>
        </h2>
        <div className="mt-14 grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          {[
            [
              [
                Network,
                "Prerequisite graph",
                "See which topics each concept depends on.",
              ],
              [
                ScanSearch,
                "Dual-layer diagnosis",
                "Conceptual and math gaps, told apart.",
              ],
              [
                MessageCircleQuestion,
                "Socratic tutor",
                "Hints that build reasoning.",
              ],
            ],
            null,
            [
              [
                Calculator,
                "Math validator",
                "Numbers and units checked by code.",
              ],
              [
                Layers,
                "Adaptive difficulty",
                "Bloom level and difficulty tracked separately.",
              ],
              [
                LineChart,
                "Live analytics",
                "Mastery, progress and accuracy at a glance.",
              ],
            ],
          ].map((col, ci) =>
            col ? (
              <div key={ci} className="space-y-4">
                {(col as any[]).map(([Icon, t, d]) => (
                  <Card key={t}>
                    <CardHeader className="flex-row items-start gap-3 space-y-0">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="space-y-1">
                        <CardTitle className="text-base">{t}</CardTitle>
                        <CardDescription>{d}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <div
                key={ci}
                className="mx-auto hidden h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-violet-500 to-indigo-700 shadow-[0_0_90px_hsl(258_90%_66%/.7)] md:flex"
              >
                <Atom className="h-10 w-10" />
              </div>
            ),
          )}
        </div>
      </section>

      
{/* MARQUEE */}
<section className="py-12">
  <div className="mb-6 text-center">
    <Eyebrow>Topics covered · more coming soon</Eyebrow>
  </div>

  <div className="overflow-hidden">
    <div className="flex w-max animate-marquee gap-3">
      {[...TOPICS, ...TOPICS].map((t, i) => (
        <span
          key={i}
          className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-white/80"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
</section>

      <Connector h={14} />

      {/* UNDER THE HOOD */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center">
          <Eyebrow>Under the hood</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
            Engineered for real <Grad>tutoring</Grad>
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {[
            [
              "Code decides, AI explains",
              "Scoring, graph logic and difficulty are rules. The language model only explains and asks questions.",
            ],
            [
              "Validated numbers",
              "Answers and units are checked deterministically, not by model opinion.",
            ],
            [
              "Curriculum-grounded",
              "Planned retrieval from one approved textbook so explanations stay on-syllabus.",
            ],
            [
              "Evidence you can audit",
              "Each mastery change traces back to stored attempts and hints.",
            ],
          ].map(([t, d]) => (
            <Card key={t}>
              <CardHeader>
                <CardTitle className="text-lg">{t}</CardTitle>
                <CardDescription>{d}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* IMAGINE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Imagine learning physics <Grad>without fear</Grad>
            </h2>
            {[
              "No judgement for wrong answers",
              "Hints before answers",
              "Feedback that explains why",
            ].map((t) => (
              <p
                key={t}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <Check className="h-4 w-4 text-violet-300" />
                {t}
              </p>
            ))}
            <Button asChild>
              <Link href="/onboarding">Try it now</Link>
            </Button>
          </div>
          <Phone>
            <div className="flex h-[400px] flex-col items-center justify-center gap-4 text-center">
              <div className="h-28 w-28">
                <Orb />
              </div>
              <p className="font-display text-2xl font-semibold leading-tight">
                Ask anything.
                <br />
                We’ve got you.
              </p>
            </div>
          </Phone>
        </div>
      </section>
      <Connector h={14} />

      {/* PATHS */}
      <section id="paths" className="mx-auto max-w-5xl px-6 py-10 text-center">
        <Eyebrow>Learning paths</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
          Choose the path that <Grad>fits you best</Grad>
        </h2>
        <div className="mt-12 grid items-stretch gap-5 text-left md:grid-cols-3">
          {[
            [
              "Beginner",
              "Foundation",
              "Force, mass and acceleration from scratch with everyday examples.",
              ["Zero-level lessons", "Guided practice"],
              false,
            ],
            [
              "Intermediate",
              "Gap recovery",
              "Diagnostic first, then targeted fixes for friction and net force.",
              ["Diagnostic", "Socratic hints"],
              true,
            ],
            [
              "Advanced",
              "Challenge",
              "Skip what you have mastered and solve multi-step problems.",
              ["Skip basics", "Multi-step"],
              false,
            ],
          ].map(([t, s, d, l, hot]) => (
            <Card
              key={t as string}
              className={
                hot
                  ? "border-violet-400/50 bg-gradient-to-b from-violet-500/20 to-card shadow-[0_0_60px_-15px_hsl(258_90%_66%/.6)]"
                  : ""
              }
            >
              <CardHeader>
                <Badge variant="muted" className="w-fit">
                  {s as string}
                </Badge>
                <CardTitle className="pt-2 text-2xl">{t as string}</CardTitle>
                <CardDescription>{d as string}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {(l as string[]).map((x) => (
                  <p key={x} className="flex gap-2">
                    <Check className="h-4 w-4 text-violet-300" />
                    {x}
                  </p>
                ))}
                <Button
                  asChild
                  variant={hot ? "default" : "outline"}
                  className="mt-4 w-full"
                >
                  <Link href="/onboarding">
                    Start {(t as string).toLowerCase()}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Questions, <Grad>answered</Grad>
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQ.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-xl border border-white/10 bg-card/60 px-5 py-4 open:border-violet-400/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {q}
                <Plus className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(258_90%_66%/.25),transparent_60%)]" />
        <h2 className="relative mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          You don’t need more lessons.
          <br />
          <Grad>You need to find your gaps.</Grad>
        </h2>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/register">Create free account</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/dashboard">
              View demo dashboard <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <Logo />
          <div className="flex gap-6">
            <Link href="/login" className="hover:text-white">
              Login
            </Link>
            <Link href="/register" className="hover:text-white">
              Register
            </Link>
            <Link href="/dashboard" className="hover:text-white">
              Demo
            </Link>
          </div>
          <span className="text-xs">
            © 2026 SolMind AI · Demo prototype with simulated data
          </span>
        </div>
      </footer>
    </div>
  );
}
