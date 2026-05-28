import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-blue-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.35),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.25),_transparent_40%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-mesh" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl animate-pulse-glow"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-primary" />
            Next-gen AI career intelligence
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Your AI copilot for the{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
  career you deserve
</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            CareerPilot AI scores your resume against ATS, surfaces skill gaps,
            runs voice-driven mock interviews, and builds a roadmap to land your dream role.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/signup">
  <Button
    size="lg"
    className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
  >
    Start free analysis
    <ArrowRight className="ml-1 h-4 w-4" />
  </Button>
</Link>
            <Button size="lg" variant="outline" className="glass border-border/60">
              <Play className="mr-1 h-4 w-4" />
              Watch 90s demo
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Free forever plan · No credit card required
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-1 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />
          <div className="relative rounded-2xl glass p-2 shadow-elegant">
            <div className="rounded-xl bg-background/40 p-8 sm:p-12">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "ATS Score", value: "94" },
                  { label: "Skills matched", value: "27/30" },
                  { label: "Interview ready", value: "Yes" },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg glass p-4">
                    <div className="text-gradient text-2xl font-semibold sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
