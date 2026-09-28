"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { SITE } from "@/lib/site";
import { formatUsd } from "@/lib/utils";

type Mode = "offer" | "buy" | "agent";

export function AcquisitionForm({ defaultMode = "offer" }: { defaultMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    offer: String(SITE.minPrice),
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          mode,
          domain: SITE.domain,
          source: "acquisition-form",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
        <p className="font-display text-2xl text-[var(--foreground)]">Inquiry received</p>
        <p className="mt-2 text-sm text-[var(--muted-fg)]">
          We typically respond within 24–48 hours at {SITE.email}.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["offer", "Make Offer"],
            ["buy", "Buy Now"],
            ["agent", "Contact Agent"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setMode(id)}
            className={`min-h-12 rounded-xl px-4 text-sm font-semibold transition-colors ${
              mode === id
                ? "bg-[var(--ink)] text-white dark:bg-[var(--accent)] dark:text-[var(--ink)]"
                : "bg-[var(--muted)] text-[var(--muted-fg)] hover:text-[var(--foreground)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-[var(--muted-fg)]">
        {mode === "buy" &&
          `Purchase ${SITE.domain} at the listed price of ${formatUsd(SITE.price)} via escrow.`}
        {mode === "offer" &&
          `Submit a serious offer. Asking range starts near ${formatUsd(SITE.minPrice)}.`}
        {mode === "agent" &&
          "Talk with a domain specialist about use cases, transfer, and timeline."}
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </div>
        </div>
        {mode === "offer" && (
          <div className="space-y-2">
            <Label htmlFor="offer">Offer amount (USD)</Label>
            <Input
              id="offer"
              type="number"
              min={1000}
              step={500}
              required
              value={form.offer}
              onChange={(e) => setForm((f) => ({ ...f, offer: e.target.value }))}
            />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="message">Intended use / notes</Label>
          <Textarea
            id="message"
            placeholder="Real estate portal, events calendar, hospitality brand…"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          />
        </div>
        {status === "error" && (
          <p className="text-sm text-red-600">
            Could not send. Email {SITE.email} directly.
          </p>
        )}
        <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
          {status === "loading"
            ? "Sending…"
            : mode === "buy"
              ? "Start Buy Now"
              : mode === "agent"
                ? "Contact Agent"
                : "Submit Offer"}
        </Button>
        <p className="text-center text-xs text-[var(--muted-fg)]">
          Secured via escrow · SSL encrypted · No commitment until you confirm
        </p>
      </form>
    </div>
  );
}
