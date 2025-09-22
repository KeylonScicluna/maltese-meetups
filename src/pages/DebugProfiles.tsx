import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function DebugProfiles() {
  // ❌ Block in production
if (!import.meta.env.DEV) {
  return <h1>Not Found</h1>;
}

  // ✅ Local debug code continues below
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("profiles").select("*");
      if (error) setError(error.message);
      setRows(data ?? []);
    })();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Debug Profiles</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <pre>{JSON.stringify(rows, null, 2)}</pre>
    </div>
  );
}
