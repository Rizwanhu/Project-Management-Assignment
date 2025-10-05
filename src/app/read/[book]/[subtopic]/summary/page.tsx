import { appData } from "@/data/demo";

export default async function SubtopicSummaryPage({ params }: { params: Promise<{ book: string; subtopic: string }> }) {
  const { book: bookId, subtopic: subtopicId } = await params;
  const topic = appData.topics[0];
  const book = topic.books.find((b) => b.id === bookId);
  const sub = book?.subtopics.find((s) => s.id === subtopicId);
  if (!book || !sub) return <div>Not found</div>;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Summary — {sub.title}</h1>
      <p className="text-sm text-zinc-700 dark:text-zinc-300">{sub.summary.text}</p>
    </div>
  );
}


