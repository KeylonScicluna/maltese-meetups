// src/App.tsx
import { useMemo } from "react";
import DebugProfiles from "./pages/DebugProfiles";

/**
 * Very small "router":
 *   - "/"                → Landing page
 *   - "/debug/profiles"  → Supabase debug JSON
 *   - anything else      → 404 message + link home
 */
export default function App() {
  const path = useMemo(() => window.location.pathname, []);

// Debug route (dev only)
if (path === "/debug/profiles") {
  if (!import.meta.env.DEV) {
    // In production, pretend it doesn't exist
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <h1>404</h1>
        <p>Page not found.</p>
        <a href="/" style={{ color: "blue" }}>Return to Home</a>
      </div>
    );
  }
  return <DebugProfiles />;
}

  // 404 route
  if (path !== "/") {
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>404</h1>
        <p>Oops! Page not found</p>
        <a href="/" style={{ color: "blue" }}>Return to Home</a>
      </div>
    );
  }

  // Home / landing page
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "linear-gradient(115deg, rgba(0,118,255,.08), rgba(255,118,0,.08)), url(/assets/hero.jpg) center/cover no-repeat",
        color: "#111",
        padding: 24,
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,.85)",
          borderRadius: 16,
          padding: 24,
          maxWidth: 780,
        }}
      >
        <h1 style={{ fontSize: 48, margin: 0 }}>Flirt Island</h1>
        <p style={{ fontSize: 20, margin: "12px 0 20px" }}>
          Malta&apos;s Premier Dating Experience
        </p>
        <p style={{ marginBottom: 28 }}>
          Find love, friendship, and connection in the heart of the Mediterranean.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/"
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              background: "#111",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Get Started
          </a>
          <a
            href="/"
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid #111",
              color: "#111",
              textDecoration: "none",
            }}
          >
            Learn More
          </a>
        </div>


      </div>
    </div>
  );
}
