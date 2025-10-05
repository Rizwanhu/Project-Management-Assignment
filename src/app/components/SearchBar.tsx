"use client";

import { useMemo, useState } from "react";
import { searchAll } from "@/data/demo";

type Props = {
  placeholder?: string;
  onNavigate?: () => void;
};

export default function SearchBar({ placeholder = "Search topics, books, subtopics...", onNavigate }: Props) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => (query.trim().length ? searchAll(query) : []), [query]);

  return (
    <div className="w-full max-w-xl">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded border border-black/10 dark:border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-black"
      />
      {results.length > 0 && (
        <ul className="mt-2 bg-white dark:bg-zinc-900 rounded border border-black/10 dark:border-white/15 divide-y">
          {results.map((r, idx) => (
            <li key={idx} className="p-2 text-sm hover:bg-black/5 dark:hover:bg-white/5">
              <a href={r.href} onClick={onNavigate} className="flex items-center gap-2">
                <span className="text-zinc-500 capitalize">{r.type}</span>
                <span className="font-medium">{r.title}</span>
                {r.context ? <span className="text-zinc-500">— {r.context}</span> : null}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


