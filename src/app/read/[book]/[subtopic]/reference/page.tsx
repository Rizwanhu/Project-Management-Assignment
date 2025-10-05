import { appData } from "@/data/demo";

export default async function SubtopicReferencePage({ params }: { params: Promise<{ book: string; subtopic: string }> }) {
  const { book: bookId, subtopic: subtopicId } = await params;
  const topic = appData.topics[0];
  const book = topic.books.find((b) => b.id === bookId);
  const sub = book?.subtopics.find((s) => s.id === subtopicId);
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


