import { appData } from "@/data/demo";
import Link from "next/link";
import SearchBar from "../components/SearchBar";

export default function ReadIndexPage() {
  const topic = appData.topics[0];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Read</h1>
      <SearchBar />
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Books in {topic.name}</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {topic.books.map((book) => (
            <li key={book.id} className="rounded border p-3 hover:bg-black/5 dark:hover:bg-white/5">
              <Link href={`/read/${book.id}`} className="font-medium">
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


