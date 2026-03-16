"use client";

import { useEffect, useRef, useState } from "react";

type Step = "email" | "code" | "details" | "success" | "already-exists";
type InternshipType = "INTERNSHIP" | "ATTACHMENT";
type WaitlistRole = "INTERN" | "COMPANY";

const STEPS: Record<Step, { percent: number; strokeColor: string; iconPath: string }> = {
  email: {
    percent: 20,
    strokeColor: "#235347",
    iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  code: {
    percent: 45,
    strokeColor: "#6d28d9",
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  details: {
    percent: 70,
    strokeColor: "#C9A227",
    iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  success: {
    percent: 100,
    strokeColor: "#059669",
    iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  "already-exists": {
    percent: 100,
    strokeColor: "#C9A227",
    iconPath: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },
};

const RADIUS = 46;
const CIRC = 2 * Math.PI * RADIUS;

function ProgressRing({ step, loading }: { step: Step; loading: boolean }) {
  const cfg = STEPS[step];
  const dashOffset = CIRC - (cfg.percent / 100) * CIRC;
  return (
    <div className="relative w-28 h-28 mx-auto mb-6 shrink-0">
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full ${loading ? "wl-spin-slow" : ""}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="#e5e7eb" strokeWidth="5" />
        <circle
          cx="50" cy="50" r={RADIUS} fill="none"
          stroke={cfg.strokeColor} strokeWidth="5" strokeLinecap="round"
          strokeDasharray={loading ? "40 250" : CIRC}
          strokeDashoffset={loading ? 0 : dashOffset}
          className={`wl-ring-transition ${loading ? "wl-dash" : ""}`}
          style={{ filter: `drop-shadow(0 0 6px ${cfg.strokeColor}55)` }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          key={step}
          viewBox="0 0 24 24" fill="none"
          stroke={cfg.strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          className={`w-9 h-9 wl-icon-pop ${loading ? "wl-pulse" : ""}`}
        >
          <path d={cfg.iconPath} />
        </svg>
      </div>
    </div>
  );
}

function StepPanel({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      className="absolute inset-x-0 transition-all duration-500"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0) scale(1)" : "translateY(14px) scale(0.97)",
        pointerEvents: active ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
}

export default function WaitlistForm() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [type, setType] = useState<InternshipType>("INTERNSHIP");
  const [role, setRole] = useState<WaitlistRole>("INTERN");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);
  const [position, setPosition] = useState<number | null>(null);
  const [isOG, setIsOG] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const codeStr = code.join("");
  const codeValid = codeStr.length === 6 && /^\d+$/.test(codeStr);
  const timerDisplay = `${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, "0")}`;

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  function startTimer() {
    setTimer(600);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer((t) => { if (t <= 1) { clearInterval(timerRef.current!); return 0; } return t - 1; });
    }, 1000);
  }

  async function requestCode() {
    if (!emailValid) { setError("Please enter a valid email address"); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/waitlist/request-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.alreadyOnWaitlist) { setIsOG(data.isOG); setStep("already-exists"); }
        else setError(data.error || "Failed to send code. Please try again.");
      } else {
        setStep("code"); startTimer();
        setTimeout(() => inputRefs.current[0]?.focus(), 120);
      }
    } catch { setError("Network error. Please try again."); }
    finally { setLoading(false); }
  }

  async function submitForm() {
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/waitlist/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: codeStr, name: name.trim() || undefined, institution: institution.trim() || undefined, type, role }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStep("code"); setCode(["", "", "", "", "", ""]);
        setError(data.error || "Invalid code. Please try again.");
        setTimeout(() => inputRefs.current[0]?.focus(), 120);
      } else {
        setPosition(data.position); setIsOG(data.isOG);
        setStep("success");
        if (timerRef.current) clearInterval(timerRef.current);
      }
    } catch { setError("Network error. Please try again."); }
    finally { setLoading(false); }
  }

  function handleCodeInput(i: number, val: string) {
    if (val && !/^\d$/.test(val)) return;
    const next = [...code]; next[i] = val; setCode(next);
    if (val && i < 5) inputRefs.current[i + 1]?.focus();
  }

  function handleCodeKey(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      if (!code[i] && i > 0) inputRefs.current[i - 1]?.focus();
      else { const n = [...code]; n[i] = ""; setCode(n); }
    } else if (e.key === "ArrowLeft" && i > 0) inputRefs.current[i - 1]?.focus();
    else if (e.key === "ArrowRight" && i < 5) inputRefs.current[i + 1]?.focus();
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text/plain").trim();
    if (!/^\d+$/.test(pasted)) return;
    const digits = pasted.slice(0, 6).split("");
    const next = ["", "", "", "", "", ""];
    digits.forEach((d, i) => { next[i] = d; });
    setCode(next);
    inputRefs.current[Math.min(digits.length, 5)]?.focus();
  }

  function reset() {
    setStep("email"); setEmail(""); setCode(["", "", "", "", "", ""]);
    setName(""); setInstitution(""); setType("INTERNSHIP"); setRole("INTERN");
    setError(""); setPosition(null); setIsOG(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-canvas rounded-3xl border border-slate-200 shadow-2xl shadow-brand/5 p-8">
        <ProgressRing step={step} loading={loading} />

        <div className="relative" style={{ minHeight: 360 }}>

          {/* EMAIL */}
          <StepPanel active={step === "email"}>
            <div className="space-y-5">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-ink mb-1">Join the Waitlist</h3>
                <p className="text-ink/60 text-sm leading-relaxed">
                  Be among the first to access InternLink - whether you&apos;re a student or an organisation.
                </p>
              </div>
              <input
                type="email" value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                onKeyDown={(e) => e.key === "Enter" && requestCode()}
                placeholder="you@example.com"
                disabled={loading}
                className="wl-input bg-canvas"
              />
              {error && step === "email" && <p className="wl-error">{error}</p>}
              <button onClick={requestCode} disabled={!emailValid || loading} className="wl-btn-primary">
                {loading ? "Sending code…" : "Continue →"}
              </button>
            </div>
          </StepPanel>

          {/* CODE */}
          <StepPanel active={step === "code"}>
            <div className="space-y-5 text-center">
              <div>
                <h3 className="text-2xl font-bold text-ink mb-1">Verify your email</h3>
                <p className="text-ink/60 text-sm">
                  We sent a 6-digit code to <span className="text-ink font-semibold">{email}</span>
                </p>
                {timer > 0 && <p className="text-brand text-xs mt-1 font-medium">Expires in {timerDisplay}</p>}
              </div>
              <div className="flex gap-2 justify-center">
                {code.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => { inputRefs.current[i] = el; }}
                    type="text" inputMode="numeric" maxLength={1} value={digit}
                    onChange={(e) => handleCodeInput(i, e.target.value)}
                    onKeyDown={(e) => handleCodeKey(i, e)}
                    onPaste={handlePaste}
                    onFocus={(e) => e.target.select()}
                    disabled={loading}
                    className={`wl-code-input ${error && step === "code" ? "border-red-400" : digit ? "border-brand" : "border-slate-300"}`}
                    aria-label={`Digit ${i + 1}`}
                  />
                ))}
              </div>
              {error && step === "code" && <p className="wl-error">{error}</p>}
              <button
                onClick={() => { if (!codeValid) return; setStep("details"); setError(""); }}
                disabled={!codeValid || loading}
                className="wl-btn-primary"
                style={{ background: "linear-gradient(135deg, #6d28d9, #4c1d95)" }}
              >
                Continue →
              </button>
              <button onClick={() => { setStep("email"); setCode(["", "", "", "", "", ""]); setError(""); }} className="wl-btn-ghost">
                ← Change email
              </button>
            </div>
          </StepPanel>

          {/* DETAILS */}
          <StepPanel active={step === "details"}>
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-ink mb-1">Tell us about you</h3>
                <p className="text-ink/60 text-sm">Optional - helps us personalise your experience.</p>
              </div>

              {/* Role toggle */}
              <div className="flex rounded-xl border border-slate-200 overflow-hidden">
                {(["INTERN", "COMPANY"] as WaitlistRole[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRole(r)}
                    className={`flex-1 py-3 text-sm font-semibold transition-colors ${role === r ? "bg-brand text-white" : "text-ink/60 hover:bg-slate-50"}`}
                  >
                    {r === "INTERN" ? "🎓 Student / Intern" : "🏢 Organisation"}
                  </button>
                ))}
              </div>

              <input
                type="text" value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={role === "COMPANY" ? "Contact person's name" : "Your full name"}
                className="wl-input"
              />
              <input
                type="text" value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder={role === "COMPANY" ? "Organisation or company name" : "University or institution"}
                className="wl-input"
              />

              {/* Internship type - interns only */}
              {role === "INTERN" && (
                <div className="flex rounded-xl border border-slate-200 overflow-hidden">
                  {(["INTERNSHIP", "ATTACHMENT"] as InternshipType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`flex-1 py-3 text-sm font-semibold transition-colors ${type === t ? "text-white" : "text-ink/60 hover:bg-slate-50"}`}
                      style={type === t ? { background: "linear-gradient(135deg, #C9A227, #a07a10)" } : {}}
                    >
                      {t === "INTERNSHIP" ? "🎯 Internship" : "📎 Attachment"}
                    </button>
                  ))}
                </div>
              )}

              {error && <p className="wl-error">{error}</p>}

              <button onClick={submitForm} disabled={loading} className="wl-btn-primary">
                {loading ? "Securing your spot…" : role === "COMPANY" ? "Request Early Access 🚀" : "Secure My Spot 🚀"}
              </button>
              <button onClick={() => { setStep("code"); setError(""); }} className="wl-btn-ghost">
                ← Back
              </button>
            </div>
          </StepPanel>

          {/* SUCCESS */}
          <StepPanel active={step === "success"}>
            <div className="text-center space-y-4">
              <div className="text-5xl mb-2">{isOG ? "👑" : "🎉"}</div>
              <h3 className="text-2xl font-bold text-ink">
                {isOG ? "OG Status Confirmed!" : "You're on the list!"}
              </h3>
              {position && (
                <div
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: isOG ? "var(--color-gold-50)" : "var(--color-brand-50)",
                    color: isOG ? "var(--color-gold)" : "var(--color-brand)",
                  }}
                >
                  #{position} in line
                </div>
              )}
              <p className="text-ink/60 text-sm leading-relaxed max-w-xs mx-auto">
                {isOG
                  ? "You're one of our first 100 members - you'll get exclusive early access and OG perks when we launch later this year."
                  : "We'll notify you the moment InternLink opens later this year. We're working hard to get there!"}
              </p>
              <p className="text-ink/50 text-xs">A welcome email is on its way to <strong>{email}</strong></p>
              <button onClick={reset} className="wl-btn-ghost text-brand">Register another email</button>
            </div>
          </StepPanel>

          {/* ALREADY EXISTS */}
          <StepPanel active={step === "already-exists"}>
            <div className="text-center space-y-4">
              <div className="text-4xl">{isOG ? "👑" : "✌️"}</div>
              <h3 className="text-2xl font-bold text-ink">
                {isOG ? "OG Status Confirmed!" : "Already Registered"}
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed max-w-xs mx-auto">
                {isOG
                  ? "You were one of our first 100 - early-access OG status is locked in."
                  : <>{`The email `}<strong className="text-ink">{email}</strong>{` is already on the waitlist. We'll be in touch!`}</>}
              </p>
              <button onClick={reset} className="wl-btn-ghost">← Use a different email</button>
            </div>
          </StepPanel>

        </div>
      </div>

      <style jsx>{`
        .wl-input {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          color: #1e1e1e;
          background: #fafafa;
        }
        .wl-input:focus { border-color: #235347; box-shadow: 0 0 0 3px rgba(35,83,71,0.1); }
        .wl-input::placeholder { color: #9ca3af; }
        .wl-input:disabled { opacity: 0.5; cursor: not-allowed; }

        .wl-code-input {
          width: 44px;
          height: 54px;
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          border: 2px solid;
          border-radius: 10px;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          background: #fafafa;
          color: #1e1e1e;
        }
        .wl-code-input:focus { box-shadow: 0 0 0 3px rgba(35,83,71,0.1); }

        .wl-btn-primary {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #235347, #2e6b5e);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          border-radius: 12px;
          transition: opacity 0.2s, transform 0.15s;
          box-shadow: 0 8px 24px rgba(35,83,71,0.2);
        }
        .wl-btn-primary:hover:not(:disabled) { opacity: 0.92; transform: translateY(-1px); }
        .wl-btn-primary:disabled { opacity: 0.45; cursor: not-allowed; }

        .wl-btn-ghost {
          width: 100%;
          padding: 10px;
          font-size: 13px;
          font-weight: 500;
          color: #6b7280;
          border-radius: 10px;
          transition: color 0.15s;
        }
        .wl-btn-ghost:hover { color: #1e1e1e; }

        .wl-error {
          font-size: 13px;
          color: #dc2626;
          background: rgba(220,38,38,0.07);
          padding: 8px 12px;
          border-radius: 8px;
          text-align: center;
        }

        @keyframes wl-icon-pop {
          0%   { transform: scale(0.4); opacity: 0; }
          60%  { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes wl-spin-slow {
          from { transform: rotate(-90deg); }
          to   { transform: rotate(270deg); }
        }
        @keyframes wl-dash {
          0%   { stroke-dasharray: 1 290; stroke-dashoffset: 0; }
          50%  { stroke-dasharray: 120 290; stroke-dashoffset: -60; }
          100% { stroke-dasharray: 1 290; stroke-dashoffset: -290; }
        }
        @keyframes wl-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }

        :global(.wl-icon-pop)        { animation: wl-icon-pop 0.45s cubic-bezier(0.175,0.885,0.32,1.275) forwards; }
        :global(.wl-ring-transition) { transition: stroke-dashoffset 0.7s ease, stroke 0.4s ease; }
        :global(.wl-spin-slow)       { animation: wl-spin-slow 2s linear infinite; }
        :global(.wl-dash)            { animation: wl-dash 2s ease-in-out infinite; }
        :global(.wl-pulse)           { animation: wl-pulse 1.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
