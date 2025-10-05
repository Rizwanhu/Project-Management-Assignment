export type Reference = {
  id: string;
  title: string;
  author?: string;
  url?: string;
  year?: number;
};

export type Summary = {
  id: string;
  text: string;
};

export type ComparisonPoint = {
  id: string;
  label: string;
  description: string;
};

export type Subtopic = {
  id: string;
  title: string;
  content: string;
  comparisons: ComparisonPoint[];
  summary: Summary;
  references: Reference[];
};

export type Book = {
  id: string; // slug-safe id
  title: string;
  subtopics: Subtopic[];
};

export type Topic = {
  id: string; // slug-safe id
  name: string;
  books: Book[];
};

export type BibliographyEntry = Reference & {
  topicId: string;
  bookId?: string;
  subtopicId?: string;
};

export type AppData = {
  topics: Topic[];
  bibliography: BibliographyEntry[];
};

export type SearchResult = {
  type: "topic" | "book" | "subtopic";
  title: string;
  href: string;
  context?: string;
};


