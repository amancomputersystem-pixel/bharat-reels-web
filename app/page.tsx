
"use client";

import { useState } from "react";

export default function Home() {
  const [caption, setCaption] = useState("");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#101010",
      color: "white",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "auto"
    }}>
      <h1 style={{ color: "#22c55e" }}>🇮🇳 Bharat Reels</h1>
      <p>Apni duniya, apni awaaz.</p>
      <hr />

      <h2>For You</h2>
      <div style={{
        background: "#202020",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px"
      }}>
        <p>🎬 Bharat Reels feed</p>
        <p>Apne videos dekhein aur share karein.</p>
      </div>

      <h3>Create a post</h3>
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Aap kya share karna chahte hain?"
        style={{
          width: "100%",
          minHeight: "90px",
          padding: "12px",
          boxSizing: "border-box",
          borderRadius: "8px",
          background: "#202020",
          color: "white"
        }}
      />

      <button
        onClick={() => alert(
          caption.trim()
            ? "Agla step: Supabase se post save karna."
            : "Pehle caption likhiye."
        )}
        style={{
          marginTop: "12px",
          padding: "12px 20px",
          background: "#22c55e",
          color: "#101010",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold"
        }}
      >
        Create post
      </button>

      <hr style={{ marginTop: "30px" }} />
      <p>Home · Search · Create · Profile</p>
    </main>
  );
}
