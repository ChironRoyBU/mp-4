import React from "react";
import Link from "next/link";

export default async function PokemonPage() {
  const apiKey = process.env.POKEMON_API_KEY;

  if (!apiKey) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Missing API Key</h1>
        <p>Please add your POKEMON_API_KEY to .env.local</p>
        <Link href="/">Back to Home</Link>
      </main>
    );
  }

  const url = "https://api.pokemontcg.io/v2/cards?pageSize=20";

  let data: any = null;
  let errorMessage: string | null = null;

  try {
    const res = await fetch(url, {
      headers: {
        "X-Api-Key": apiKey,
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const json = await res.json();
    data = json.data;
  } catch (err) {
    console.error(err);
    errorMessage = "Failed to fetch Pokémon cards.";
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Pokémon Cards</h1>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {data?.map((card: any) => (
          <li
            key={card.id}
            style={{
              marginBottom: "2rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2>{card.name}</h2>
            <p>HP: {card.hp || "?"} | Type: {card.types?.join(", ") || "?"}</p>
            {card.images?.small && (
              <img src={card.images.small} alt={card.name} style={{ maxWidth: "200px" }} />
            )}
          </li>
        ))}
      </ul>

      <Link href="/" style={{ display: "inline-block", marginTop: "1rem" }}>
        ⬅ Back to Home
      </Link>
    </main>
  );
}
