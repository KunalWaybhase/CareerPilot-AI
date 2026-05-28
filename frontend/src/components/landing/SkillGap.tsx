import { TrendingUp, Target } from "lucide-react";

const skills = [
  { name: "System Design", you: 72, target: 90 },
  { name: "Product Strategy", you: 85, target: 88 },
  { name: "SQL & Analytics", you: 54, target: 80 },
  { name: "Stakeholder Comms", you: 91, target: 90 },
  { name: "A/B Experimentation", you: 48, target: 85 },
];

export function SkillGap() {
  return (
    <section id="analytics" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-gradient">Skill Gap Analytics</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
            Know <span className="text-gradient">exactly what to learn</span> next
          </h2>
          <p className="mt-4 text-muted-foreground">
            Benchmarked against thousands of hired candidates in your target role.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative grid gap-6 rounded-2xl glass p-6 shadow-elegant sm:p-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-5">
              {skills.map((s) => {
                const gap = s.target - s.you;
                return (
                  <div key={s.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{s.name}</span>
                      <span className={gap > 10 ? "text-amber-400" : "text-primary"}>
                        {gap > 0 ? `+${gap} to target` : "On target"}
                      </span>
                    </div>
                    <div className="relative h-2.5 overflow-hidden rounded-full bg-secondary/60">
                      <div
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-primary shadow-glow"
                        style={{ width: `${s.you}%` }}
                      />
                      <div
                        aria-hidden
                        className="absolute top-0 h-full w-px bg-foreground/40"
                        style={{ left: `${s.target}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 lg:border-l lg:border-border/60 lg:pl-6">
              <div className="rounded-xl glass p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Target className="h-3 w-3 text-primary" /> Readiness
                </div>
                <div className="mt-2 text-4xl font-semibold text-gradient">78%</div>
                <div className="text-xs text-muted-foreground">Senior PM at FAANG</div>
              </div>
              <div className="rounded-xl glass p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-primary" /> 30-day trajectory
                </div>
                <div className="mt-2 text-4xl font-semibold text-gradient">+14</div>
                <div className="text-xs text-muted-foreground">Points to placement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
