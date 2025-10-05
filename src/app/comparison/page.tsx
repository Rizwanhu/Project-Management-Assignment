import { appData } from "@/data/demo";
import SearchBar from "../components/SearchBar";

export default function ComparisonPage() {
  const topic = appData.topics[0];
  const allSubtopics = topic.books.flatMap((b) => b.subtopics);
  const topThree = allSubtopics.slice(0, 3);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Comparison</h1>
      <SearchBar placeholder="Search to compare..." />
      <div className="grid sm:grid-cols-3 gap-4">
        {topThree.map((sub) => (
          <div key={sub.id} className="rounded border p-3">
            <h3 className="font-medium">{sub.title}</h3>
            <ul className="mt-2 list-disc list-inside text-sm">
              {sub.comparisons.map((c) => (
                <li key={c.id}>
                  <span className="font-semibold">{c.label}:</span> {c.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


