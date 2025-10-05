import { appData } from "@/data/demo";
import Link from "next/link";

type Params = { params: { book: string } };

export default function BookPage({ params }: Params) {
  const topic = appData.topics[0];
  const book = topic.books.find((b) => b.id === params.book);
  if (!book) {
    return <div>Book not found.</div>;
  }
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{book.title}</h1>
      <div>
        <h2 className="text-lg font-semibold">Subtopics</h2>
        <ul className="mt-2 grid sm:grid-cols-2 gap-3">
          {book.subtopics.map((s) => (
            <li key={s.id} className="rounded border p-3">
              <Link href={`/read/${book.id}/${s.id}`} className="font-medium">
                {s.title}
              </Link>
              <div className="mt-2 text-sm flex gap-3">
                <Link href={`/read/${book.id}/${s.id}/comparison`} className="underline">comparison</Link>
                <Link href={`/read/${book.id}/${s.id}/summary`} className="underline">summary</Link>
                <Link href={`/read/${book.id}/${s.id}/reference`} className="underline">reference</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const topic = appData.topics[0];
  return topic.books.map((b) => ({ book: b.id }));
}


