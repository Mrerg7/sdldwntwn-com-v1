"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function ViewingCounter() {
  const [count, setCount] = useState(7);

  useEffect(() => {
    const base = 5 + Math.floor(Math.random() * 6);
    setCount(base);
    const id = window.setInterval(() => {
      setCount((c) => {
        const next = c + (Math.random() > 0.55 ? 1 : -1);
        return Math.min(18, Math.max(4, next));
      });
    }, 14000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted-fg)]">
      <Eye className="h-3.5 w-3.5 text-[var(--accent-ink)]" aria-hidden />
      <span>
        <strong className="text-[var(--foreground)]">{count}</strong> people viewing
        this domain
      </span>
    </div>
  );
}
