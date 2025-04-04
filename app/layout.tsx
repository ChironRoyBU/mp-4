import React from "react";
import Link from "next/link";


export default function RootLayout({
  children,}:
      {children: React.ReactNode;}
) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#f0f0f0",
        }}
      >
        <nav
          style={{
            background: "#ef5350",
            padding: "1rem",
            marginBottom: "2rem",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#fff",
              marginRight: "2rem",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            href="/pokemon"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Pokémon Cards
          </Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
