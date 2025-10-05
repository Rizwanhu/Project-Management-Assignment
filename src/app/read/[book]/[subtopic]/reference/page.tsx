import { appData } from "@/data/demo";

type Params = { params: { book: string; subtopic: string } };

export default function SubtopicReferencePage({ params }: Params) {
  const topic = appData.topics[0];
  const book = topic.books.find((b) => b.id === params.book);
  const sub = book?.subtopics.find((s) => s.id === params.subtopic);
  if (!book || !sub) return <div>Not found</div>;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">References — {sub.title}</h1>
      <ul className="space-y-2">
        {sub.references.map((r) => (
          <li key={r.id} className="text-sm">
            <span className="font-medium">{r.title}</span>
            {r.author ? `, ${r.author}` : ""}
            {r.year ? `, ${r.year}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}


