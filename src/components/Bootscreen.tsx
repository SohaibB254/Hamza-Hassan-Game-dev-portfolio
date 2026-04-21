"use client"

import { useEffect, useState } from "react"

const LOG_LINES = [
  "Loading project assets",
  "Mounting game engine modules",
  "Compiling shaders",
  "Initializing scene renderer",
  "Syncing portfolio data",
  "Calibrating environment",
  "All systems operational",
]

const STATUS_TEXTS = [
  "Starting up...",
  "Loading assets...",
  "Compiling...",
  "Rendering...",
  "Almost there...",
]

interface BootScreenProps {
  onComplete?: () => void
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0)
  const [visibleLogs, setVisibleLogs] = useState<number[]>([])
  const [statusIndex, setStatusIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => Math.min(prev + 1, STATUS_TEXTS.length - 1))
    }, 700)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 3 + 1, 100)
        if (next >= 100) {
          clearInterval(progressInterval)
          clearInterval(statusInterval)
          setTimeout(() => {
            setDone(true)
            // Wait 1.5s on the done message then hand off to portfolio
            setTimeout(() => {
              onComplete?.()
            }, 1500)
          }, 300)
        }
        return next
      })
    }, 80)

    return () => {
      clearInterval(progressInterval)
      clearInterval(statusInterval)
    }
  }, [onComplete])

  useEffect(() => {
    const logIndex = Math.floor((progress / 100) * LOG_LINES.length)
    setVisibleLogs(Array.from({ length: logIndex }, (_, i) => i))
  }, [progress])

  return (
    <div style={styles.screen}>
      <div style={styles.scanline} />
      <div style={styles.content}>

        <div style={styles.header}>
          <span style={styles.logo}>Portfolio OS</span>
          <span style={styles.version}>v1.0.0 — 2025</span>
        </div>

        <div style={styles.titleBlock}>
          <h1 style={styles.name}>Hamza Hassan</h1>
          <p style={styles.subtitle}>Game Developer Portfolio</p>
        </div>

        <div style={styles.logLines}>
          {LOG_LINES.map((line, i) => (
            <div
              key={i}
              style={{
                ...styles.logLine,
                opacity: visibleLogs.includes(i) ? 1 : 0,
                transition: "opacity 0.2s ease",
              }}
            >
              <span style={styles.prefix}>►</span>
              <span style={styles.logText}>{line}</span>
              <span style={styles.ok}>OK</span>
            </div>
          ))}
        </div>

        <div style={styles.progressSection}>
          <div style={styles.progressLabel}>
            <span style={styles.progressLabelText}>Initializing</span>
            <span style={styles.progressPct}>{Math.round(progress)}%</span>
          </div>
          <div style={styles.track}>
            <div
              style={{
                ...styles.fill,
                width: `${progress}%`,
                transition: "width 0.08s linear",
              }}
            />
          </div>
        </div>

        <div style={styles.cursorLine}>
          {done ? (
            <span style={styles.doneMsg}>Welcome. Let&apos;s build something great.</span>
          ) : (
            <>
              <span style={styles.statusText}>{STATUS_TEXTS[statusIndex]}</span>
              <span style={styles.cursor} />
            </>
          )}
        </div>

      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  screen: {
    background: "#0a0a0a",
    minHeight: "100dvh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Courier New', Courier, monospace",
    padding: "2rem",
    position: "relative",
    overflow: "hidden",
  },
  scanline: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)",
    pointerEvents: "none",
  },
  content: {
    width: "100%",
    maxWidth: "520px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 1,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "1.25rem",
    borderBottom: "0.5px solid #2a2a2a",
    marginBottom: "1.5rem",
  },
  logo: {
    fontSize: "11px",
    color: "#555",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  },
  version: {
    fontSize: "11px",
    color: "#333",
    letterSpacing: "0.08em",
  },
  titleBlock: {
    marginBottom: "2rem",
  },
  name: {
    fontSize: "28px",
    fontWeight: 500,
    color: "#f0f0f0",
    letterSpacing: "0.04em",
    lineHeight: 1.2,
    marginBottom: "4px",
    fontFamily: "system-ui, sans-serif",
  },
  subtitle: {
    fontSize: "12px",
    color: "#444",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
  },
  logLines: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
    marginBottom: "1.75rem",
    minHeight: "120px",
  },
  logLine: {
    fontSize: "12px",
    color: "#3a3a3a",
    letterSpacing: "0.04em",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  prefix: { color: "#2a5c3a" },
  logText: { flex: 1 },
  ok: {
    fontSize: "11px",
    color: "#2a5c3a",
    letterSpacing: "0.08em",
  },
  progressSection: {},
  progressLabel: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  progressLabelText: {
    fontSize: "11px",
    color: "#333",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
  progressPct: {
    fontSize: "11px",
    color: "#888",
  },
  track: {
    width: "100%",
    height: "2px",
    background: "#1a1a1a",
    borderRadius: "1px",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    background: "#e0e0e0",
    borderRadius: "1px",
  },
  cursorLine: {
    marginTop: "1.5rem",
    fontSize: "12px",
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    minHeight: "18px",
  },
  statusText: {
    color: "#333",
    letterSpacing: "0.04em",
  },
  cursor: {
    display: "inline-block",
    width: "7px",
    height: "13px",
    background: "#e0e0e0",
    animation: "blink 1s step-end infinite",
    verticalAlign: "middle",
  },
  doneMsg: {
    fontSize: "13px",
    color: "#f0f0f0",
    letterSpacing: "0.08em",
    fontFamily: "system-ui, sans-serif",
    animation: "fadeIn 0.6s ease forwards",
  },
}