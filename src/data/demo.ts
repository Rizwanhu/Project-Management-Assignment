import type { AppData, BibliographyEntry, Topic } from "./types";

const topics: Topic[] = [
  {
    id: "topic-physics",
    name: "Physics",
    books: [
      {
        id: "book1",
        title: "Classical Mechanics",
        subtopics: [
          {
            id: "kinematics",
            title: "Kinematics",
            content: "Intro to motion without considering forces.",
            comparisons: [
              { id: "c1", label: "1D vs 2D", description: "Dimensions of motion" },
              { id: "c2", label: "Average vs Instantaneous", description: "Rates of change" },
              { id: "c3", label: "Scalar vs Vector", description: "Quantity types" }
            ],
            summary: { id: "s1", text: "Kinematics studies the geometry of motion." },
            references: [
              { id: "r1", title: "Taylor, Classical Mechanics", author: "J. R. Taylor", year: 2005 }
            ]
          },
          {
            id: "dynamics",
            title: "Dynamics",
            content: "Forces and Newton's laws.",
            comparisons: [
              { id: "c1", label: "Inertial vs Non-inertial", description: "Frames of reference" },
              { id: "c2", label: "Mass vs Weight", description: "Intrinsic vs gravitational" },
              { id: "c3", label: "Static vs Kinetic friction", description: "Friction regimes" }
            ],
            summary: { id: "s1", text: "Dynamics explains motion via forces." },
            references: [
              { id: "r2", title: "Feynman Lectures Vol. I", author: "R. Feynman", year: 1964 }
            ]
          }
        ]
      },
      {
        id: "book2",
        title: "Electromagnetism",
        subtopics: [
          {
            id: "electrostatics",
            title: "Electrostatics",
            content: "Charges at rest, Coulomb's law.",
            comparisons: [
              { id: "c1", label: "Field vs Potential", description: "Two formulations" },
              { id: "c2", label: "Conductor vs Insulator", description: "Material response" },
              { id: "c3", label: "Point vs Continuous", description: "Charge distributions" }
            ],
            summary: { id: "s1", text: "Electrostatics deals with static electric fields." },
            references: [
              { id: "r3", title: "Jackson, Classical Electrodynamics", author: "J. D. Jackson", year: 1998 }
            ]
          }
        ]
      },
      {
        id: "book3",
        title: "Thermodynamics",
        subtopics: [
          {
            id: "laws",
            title: "Laws of Thermodynamics",
            content: "Zeroth to Third laws.",
            comparisons: [
              { id: "c1", label: "Open vs Closed", description: "System boundaries" },
              { id: "c2", label: "Heat vs Work", description: "Energy transfer modes" },
              { id: "c3", label: "Reversible vs Irreversible", description: "Process idealization" }
            ],
            summary: { id: "s1", text: "Thermodynamics governs energy and entropy." },
            references: [
              { id: "r4", title: "Callen, Thermodynamics", author: "H. B. Callen", year: 1985 }
            ]
          }
        ]
      }
    ]
  }
];

const bibliography: BibliographyEntry[] = [
  { id: "r1", title: "Taylor, Classical Mechanics", author: "J. R. Taylor", year: 2005, topicId: "topic-physics", bookId: "book1", subtopicId: "kinematics" },
  { id: "r2", title: "Feynman Lectures Vol. I", author: "R. Feynman", year: 1964, topicId: "topic-physics", bookId: "book1", subtopicId: "dynamics" },
  { id: "r3", title: "Jackson, Classical Electrodynamics", author: "J. D. Jackson", year: 1998, topicId: "topic-physics", bookId: "book2", subtopicId: "electrostatics" },
  { id: "r4", title: "Callen, Thermodynamics", author: "H. B. Callen", year: 1985, topicId: "topic-physics", bookId: "book3", subtopicId: "laws" }
];

export const appData: AppData = {
  topics,
  bibliography,
};

export function searchAll(query: string) {
  const q = query.toLowerCase();
  const results: { title: string; href: string; type: string; context?: string }[] = [];
  for (const topic of topics) {
    if (topic.name.toLowerCase().includes(q)) {
      results.push({ title: topic.name, href: `/read`, type: "topic" });
    }
    for (const book of topic.books) {
      if (book.title.toLowerCase().includes(q)) {
        results.push({ title: `${book.title}`, href: `/read/${book.id}`, type: "book", context: topic.name });
      }
      for (const sub of book.subtopics) {
        if (sub.title.toLowerCase().includes(q) || sub.content.toLowerCase().includes(q)) {
          results.push({ title: `${sub.title}`, href: `/read/${book.id}/${sub.id}`, type: "subtopic", context: `${book.title}` });
        }
      }
    }
  }
  return results;
}


