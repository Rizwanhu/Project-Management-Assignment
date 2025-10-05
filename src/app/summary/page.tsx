import { appData } from "@/data/demo";
import SearchBar from "../components/SearchBar";

export default function SummaryPage() {
  const topic = appData.topics[0];
  const summaries = topic.books.flatMap((b) =>
    b.subtopics.map((s) => ({ title: s.title, text: s.summary.text }))
  );
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Summary</h1>
      <SearchBar placeholder="Search summaries..." />
      <ul className="space-y-3">
        {summaries.map((s, i) => (
          <li key={i} className="rounded border p-3">
            <h3 className="font-medium">{s.title}</h3>
            <p className="text-sm mt-1 text-zinc-700 dark:text-zinc-300">{s.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


