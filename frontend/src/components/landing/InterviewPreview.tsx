import { Mic, AudioLines, Sparkles, Check } from "lucide-react";

export function InterviewPreview() {
  return (
    <section id="interview" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium text-gradient">AI Interview</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
            Practice with a <span className="text-gradient">voice-first interviewer</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Speak naturally. Our AI conducts realistic behavioral, technical, and case interviews —
            then scores your content, tone, pacing, and clarity in real time.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Adaptive follow-ups based on your answers",
              "Live transcript with filler-word detection",
              "Per-question scoring and improvement tips",
              "Role-specific question banks (SWE, PM, Data, Design)",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-foreground">
                <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-25 blur-3xl" />
          <div className="relative rounded-2xl glass p-6 shadow-elegant">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Pilot · AI Interviewer</div>
                  <div className="text-xs text-muted-foreground">Behavioral round · 12:34</div>
                </div>
              </div>
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">Live</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-secondary/60 p-4 text-sm text-foreground">
                "Tell me about a time you led a team through ambiguity. What was the outcome?"
              </div>
              <div className="ml-8 rounded-xl bg-gradient-primary p-4 text-sm text-primary-foreground shadow-glow">
                "At my last role, I led a cross-functional team during a major platform migration..."
              </div>
              <div className="flex items-center gap-3 rounded-xl glass p-3">
                <Mic className="h-4 w-4 text-primary" />
                <div className="flex flex-1 items-center gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1 rounded-full bg-gradient-primary"
                      style={{
                        height: `${8 + Math.abs(Math.sin(i * 0.7)) * 22}px`,
                        opacity: 0.4 + Math.abs(Math.sin(i * 0.7)) * 0.6,
                      }}
                    />
                  ))}
                </div>
                <AudioLines className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Clarity", value: "92" },
                { label: "Structure", value: "88" },
                { label: "Confidence", value: "95" },
              ].map((m) => (
                <div key={m.label} className="rounded-lg glass p-3">
                  <div className="text-gradient text-xl font-semibold">{m.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
