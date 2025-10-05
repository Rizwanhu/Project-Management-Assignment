import { appData } from "@/data/demo";

export default function BibliographyPage() {
  const refs = appData.bibliography;
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Bibliography</h1>
      <ul className="space-y-3">
        {refs.map((r) => (
          <li key={r.id} className="rounded border p-3">
            <div className="font-medium">{r.title}</div>
            <div className="text-sm text-zinc-700 dark:text-zinc-300">
              {r.author ? `${r.author}, ` : ""}{r.year ? r.year : ""}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


