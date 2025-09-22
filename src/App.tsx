// src/App.tsx
export default function App() {
  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      {/* --- Hero --- */}
      <h1>Flirt Island</h1>
      <p>Malta's Premier Dating Experience</p>
      <p>
        Find love, friendship, and connection in the heart of the Mediterranean.
      </p>

      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        <a
          href="#get-started"
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
          href="#learn"
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

      {/* --- Learn More section --- */}
      <section
        id="learn"
        style={{
          padding: 32,
          maxWidth: 800,
          margin: "80px auto",
          background: "rgba(0,0,0,0.03)",
          borderRadius: 12,
        }}
      >
        <h2>Learn More</h2>
        <p>
          Flirt Island connects people across Malta with simple, privacy-first
          matching. We’re starting small and improving fast. More details coming
          soon.
        </p>
      </section>

      {/* --- Get Started section --- */}
      <section
        id="get-started"
        style={{
          padding: 32,
          maxWidth: 800,
          margin: "80px auto",
          background: "rgba(0,0,0,0.03)",
          borderRadius: 12,
        }}
      >
        <h2>Get Started</h2>
        <p>
          We’re not accepting signups yet. Join the waitlist and we’ll ping you.
        </p>
        <a
          href="https://forms.gle/replace-with-your-form"
          style={{
            display: "inline-block",
            marginTop: 12,
            padding: "10px 18px",
            borderRadius: 999,
            background: "#111",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Join the Waitlist
        </a>
      </section>
    </div>
  );
}
