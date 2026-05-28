import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>CareerPilot <span className="text-gradient">AI</span></span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Your AI copilot for resumes, interviews, and the skills that get you hired.
            </p>
          </div>

          {[
            { title: "Product", links: ["Features", "AI Interview", "Analytics", "Roadmap"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} CareerPilot AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
