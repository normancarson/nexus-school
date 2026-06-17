/* ============================================================
   SUPABASE CONFIGURATION
   ------------------------------------------------------------
   👉 INSERT YOUR SUPABASE PROJECT URL AND ANON KEY BELOW.
   You can find these in your Supabase dashboard:
   Project Settings → API → "Project URL" and "anon public key"
============================================================ */

// 🔻🔻🔻 REPLACE THESE WITH YOUR SUPABASE CREDENTIALS 🔻🔻🔻
const SUPABASE_URL  = "https://fkpkpdcatpaadngzkyxo.supabase.co";          // e.g. https://xxxx.supabase.co
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcGtwZGNhdHBhYWRuZ3preXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NDg4NzksImV4cCI6MjA5NTIyNDg3OX0.kBqEUw8Uy9pWdIcXoviwGmXU0KsUK2vgFo2DINN25yI"; // e.g. eyJhbGciOi....
// 🔺🔺🔺 ------------------------------------------------ 🔺🔺🔺

/* Load Supabase JS client from CDN (already included in HTML) and create the client. */
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

/* ============================================================
   EXAMPLE: SAVE CONTACT MESSAGE TO SUPABASE
   ------------------------------------------------------------
   Create a table in Supabase called: contact_messages
   With columns:
     - id          (uuid, primary key, default uuid_generate_v4())
     - full_name   (text)
     - email       (text)
     - phone       (text)
     - subject     (text)
     - message     (text)
     - created_at  (timestamp, default now())
============================================================ */
async function saveContactMessage(data) {
  if (!supabaseClient) {
    console.warn("⚠️ Supabase not configured. Please add your URL and key in js/supabase-config.js");
    return { ok: false, message: "Supabase not configured yet." };
  }
  const { error } = await supabaseClient
    .from('contact_messages')
    .insert([data]);
  if (error) {
    console.error(error);
    return { ok: false, message: error.message };
  }
  return { ok: true };
}

/* ============================================================
   EXAMPLE: SAVE ADMISSIONS APPLICATION
   ------------------------------------------------------------
   Create a table in Supabase called: applications
   With columns:
     - id, full_name, email, phone, country,
     - program (text), education_level (text),
     - message (text), created_at (timestamp default now())
============================================================ */
async function saveAdmissionApplication(data) {
  if (!supabaseClient) {
    console.warn("⚠️ Supabase not configured.");
    return { ok: false, message: "Supabase not configured yet." };
  }
  const { error } = await supabaseClient
    .from('applications')
    .insert([data]);
  if (error) return { ok: false, message: error.message };
  return { ok: true };
}
