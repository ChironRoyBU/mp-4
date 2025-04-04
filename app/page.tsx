import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Welcome to the Pokémon TCG App</h1>
      <p>This app uses the Pokémon Trading Card Game API to display card data.</p>
      <Link
        href="/pokemon"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.75rem 1.25rem",
          backgroundColor: "#42a5f5",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px",
        }}
      >
        View Pokémon Cards
      </Link>
    </main>
  );
}
