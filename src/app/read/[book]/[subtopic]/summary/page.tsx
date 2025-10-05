import { appData } from "@/data/demo";

type Params = { params: { book: string; subtopic: string } };

export default function SubtopicSummaryPage({ params }: Params) {
  const topic = appData.topics[0];
  const book = topic.books.find((b) => b.id === params.book);
  const sub = book?.subtopics.find((s) => s.id === params.subtopic);
  if (!book || !sub) return <div>Not found</div>;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Summary — {sub.title}</h1>
      <p className="text-sm text-zinc-700 dark:text-zinc-300">{sub.summary.text}</p>
    </div>
  );
}


