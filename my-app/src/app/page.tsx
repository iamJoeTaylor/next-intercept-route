"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 py-2">
      <Link href="/photo">Link to /photo</Link>
      <button
        onClick={() => {
          window.history.pushState({ myHistory: "works" }, "", "/photo");
        }}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg"
      >
        Open Modal with history
      </button>
    </div>
  );
}
