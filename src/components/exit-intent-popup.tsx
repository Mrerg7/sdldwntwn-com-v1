"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/input";
import { SITE } from "@/lib/site";

const STORAGE_KEY = "sdl-exit-intent-seen";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY > 0) return;
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    const timer = window.setTimeout(() => {
      document.addEventListener("mouseout", onMouseOut);
    }, 8000);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      localStorage.setItem(
        "sdl-buyer-brief",
        JSON.stringify({ email, at: Date.now() }),
      );
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        `${SITE.domain} buyer brief request`,
      )}&body=${encodeURIComponent(
        `Please send the private buyer brief for ${SITE.domain}.\n\nEmail: ${email}`,
      )}`;
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get a private buyer brief</DialogTitle>
          <DialogDescription>
            Leave your email for a one-time note on {SITE.domain} comps, escrow
            steps, and a limited-time inquiry priority window.
          </DialogDescription>
        </DialogHeader>

        {status === "done" ? (
          <p className="mt-4 text-sm text-[var(--accent-ink)]">
            You&apos;re on the list. We&apos;ll follow up from {SITE.email}.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="exit-email">Work email</Label>
              <Input
                id="exit-email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Email us at {SITE.email}.
              </p>
            )}
            <Button type="submit" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? "Saving…" : "Send me the brief"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
