import { appData } from "@/data/demo";

type Params = { params: { book: string; subtopic: string } };

export default function SubtopicComparisonPage({ params }: Params) {
  const topic = appData.topics[0];
  const book = topic.books.find((b) => b.id === params.book);
  const sub = book?.subtopics.find((s) => s.id === params.subtopic);
  if (!book || !sub) return <div>Not found</div>;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Comparison — {sub.title}</h1>
      <ul className="list-disc list-inside">
        {sub.comparisons.map((c) => (
          <li key={c.id}>
            <span className="font-semibold">{c.label}:</span> {c.description}
          </li>
        ))}
      </ul>
    </div>
  );
}


