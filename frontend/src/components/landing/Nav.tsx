import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>CareerPilot <span className="text-gradient">AI</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
          <a href="#interview" className="transition-colors hover:text-foreground">AI Interview</a>
          <a href="#analytics" className="transition-colors hover:text-foreground">Analytics</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login">
  <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
    Sign in
  </Button>
</Link>

<Link to="/signup">
  <Button
    size="sm"
    className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
  >
    Get started
  </Button>
</Link>
        </div>
      </div>
    </header>
  );
}
