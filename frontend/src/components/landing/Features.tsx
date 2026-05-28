import { FileText, Target, Mic, Map, AudioLines, TrendingUp } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume ATS Analysis",
    desc: "Deep AI parse of structure, keywords, and impact — scored against real applicant tracking systems.",
  },
  {
    icon: Target,
    title: "Skill Gap Detection",
    desc: "Compare your profile to target roles and uncover the exact skills standing between you and the offer.",
  },
  {
    icon: Mic,
    title: "AI Mock Interviews",
    desc: "Realistic AI interviewers across behavioral, technical, and case rounds with instant scoring.",
  },
  {
    icon: Map,
    title: "Personalized Learning Roadmaps",
    desc: "Week-by-week plans with curated courses, projects, and milestones to close every gap.",
  },
  {
    icon: AudioLines,
    title: "Voice Interview Practice",
    desc: "Speak naturally — our voice AI analyzes tone, pace, filler words, and content clarity.",
  },
  {
    icon: TrendingUp,
    title: "Placement Readiness Tracking",
    desc: "A single score that tracks how close you are to landing offers at your dream companies.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-gradient">Features</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
            Everything you need to <span className="text-gradient">get hired</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six AI-powered tools working together so you spend less time guessing and more time landing offers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "var(--gradient-soft)" }}
              />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
