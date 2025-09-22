export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🏝️ Flirt Island</h1>
      <p>Welcome to Malta’s Premier Dating App!</p>
{import.meta.env.DEV && (
  <div style={{ marginTop: 18 }}>
    <a href="/debug/profiles" style={{ color: "#0070f3" }}>
      See Debug Profiles
    </a>
  </div>
)}
    </div>
  );
}
