import { appData } from "@/data/demo";
import Link from "next/link";

type Params = { params: { book: string; subtopic: string } };

export default function SubtopicPage({ params }: Params) {
  const topic = appData.topics[0];
  const book = topic.books.find((b) => b.id === params.book);
  const sub = book?.subtopics.find((s) => s.id === params.subtopic);
  if (!book || !sub) return <div>Subtopic not found.</div>;
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{sub.title}</h1>
      <p className="text-sm text-zinc-700 dark:text-zinc-300">{sub.content}</p>
      <div className="flex gap-3 text-sm">
        <Link href={`/read/${book.id}/${sub.id}/comparison`} className="underline">comparison</Link>
        <Link href={`/read/${book.id}/${sub.id}/summary`} className="underline">summary</Link>
        <Link href={`/read/${book.id}/${sub.id}/reference`} className="underline">reference</Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const topic = appData.topics[0];
  return topic.books.flatMap((b) => b.subtopics.map((s) => ({ book: b.id, subtopic: s.id })));
}


