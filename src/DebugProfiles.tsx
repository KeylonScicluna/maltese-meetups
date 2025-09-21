import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

type Profile = Record<string, any>;

export default function DebugProfiles() {
  const [rows, setRows] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setErr(null);
      const { data, error } = await supabase.from('profiles').select('*');
      if (error) {
        console.error('Supabase error:', error);
        setErr(error.message);
        setRows([]);
      } else {
        setRows(data ?? []);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div style={{ padding: 16, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Profiles Debug</h1>
      {loading && <div>Loading…</div>}
      {err && <pre style={{ color: 'red' }}>Error: {err}</pre>}
      <pre>{JSON.stringify(rows, null, 2)}</pre>
    </div>
  );
}
