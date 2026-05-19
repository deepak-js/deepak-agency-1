export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  category: string;
  hue: string;
  body: { heading: string; paragraphs: string[] }[];
}

export const posts: BlogPost[] = [
  {
    slug: "systems-over-features",
    title: "Systems over features",
    excerpt: "Why we keep choosing the boring system that runs itself over the exciting feature that demands attention.",
    date: "May 12, 2026",
    readingTime: 6,
    category: "Studio notes",
    hue: "from-slate-800 via-blue-900 to-indigo-950",
    body: [
      { heading: "The wrong unit of work", paragraphs: [
        "Most product teams measure themselves in features shipped. It's a satisfying unit — visible, demoable, easy to celebrate. It's also a poor proxy for whether the business actually got better.",
        "We've come to prefer a different unit: the system. A system is the loop that turns a real-world input into a measured outcome, every time, without anyone re-doing the work.",
      ] },
      { heading: "Why systems compound", paragraphs: [
        "Features age. Systems compound. A landing page is a snapshot; an SEO pipeline that publishes new pages weekly is a flywheel. A support macro is a band-aid; an agent that drafts replies grounded in your docs is a permanent capacity increase.",
        "The math is simple. A feature gives you a one-time lift. A system gives you a slope.",
      ] },
      { heading: "How we scope", paragraphs: [
        "Before we write any code we ask: what is the metric this system is supposed to move? Not what feature is being shipped — what number gets bigger or smaller, and by when.",
        "If we can't name the metric, we don't build the system yet. We go back to the problem.",
      ] },
    ],
  },
  {
    slug: "rag-without-tears",
    title: "RAG without tears",
    excerpt: "A practical pattern for retrieval-augmented generation that doesn't fall apart in production.",
    date: "Apr 28, 2026",
    readingTime: 9,
    category: "AI",
    hue: "from-indigo-800 via-violet-900 to-purple-950",
    body: [
      { heading: "The default architecture is fragile", paragraphs: [
        "Chunk, embed, store, retrieve, stuff into a prompt. It demos beautifully and breaks the moment your corpus grows past a few hundred documents or your questions get specific.",
        "What we've found is that the retrieval step deserves at least as much engineering as the model call. Most quality problems with RAG aren't model problems — they're retrieval problems.",
      ] },
      { heading: "Hybrid, re-ranked, scoped", paragraphs: [
        "Hybrid lexical + dense retrieval reliably outperforms either alone. Add a re-ranker — even a small one — and scope every query to the right slice of your corpus (user, workspace, tenant) and most of the hallucinations quietly disappear.",
        "Then add citations. Always citations. If your answer can't point at a source, it shouldn't exist.",
      ] },
      { heading: "Eval is not optional", paragraphs: [
        "Build the eval harness on day one. Even fifty hand-graded examples will tell you more about whether a change helps than any amount of vibes-based testing.",
      ] },
    ],
  },
  {
    slug: "the-boring-automation-test",
    title: "The boring automation test",
    excerpt: "A simple heuristic for deciding which workflows are worth automating — and which are best left alone.",
    date: "Apr 9, 2026",
    readingTime: 5,
    category: "Automation",
    hue: "from-amber-800 via-orange-900 to-red-950",
    body: [
      { heading: "Three questions", paragraphs: [
        "Before automating any workflow, we ask three questions: Is it frequent? Is it well-defined? Does it produce a result someone actually checks?",
        "If the answer to all three is yes, automate it tomorrow. If any answer is no, the automation will either break, drift, or get ignored.",
      ] },
      { heading: "Frequency", paragraphs: [
        "Anything that happens fewer than ten times a month is rarely worth the maintenance burden. The exception: high-stakes workflows where consistency matters more than time saved.",
      ] },
      { heading: "Definition", paragraphs: [
        "If the steps are ambiguous, the automation will be too. Spend a week documenting the manual workflow before you spend a day automating it.",
      ] },
    ],
  },
  {
    slug: "metrics-before-models",
    title: "Metrics before models",
    excerpt: "How to pick the right AI model when every benchmark contradicts the next.",
    date: "Mar 18, 2026",
    readingTime: 7,
    category: "AI",
    hue: "from-teal-800 via-cyan-900 to-sky-950",
    body: [
      { heading: "Stop reading benchmarks", paragraphs: [
        "Public benchmarks are a useful first sieve and a poor final answer. The model that wins MMLU on a Tuesday might be the wrong choice for your specific job on Wednesday.",
        "Define your own benchmark, even if it's small. A hundred labeled examples of the exact task you care about will beat any leaderboard.",
      ] },
      { heading: "The three axes that actually matter", paragraphs: [
        "Cost, latency, accuracy. Pick the two you can't compromise on, and let the third be the variable. Most teams overweight accuracy on tasks where 'good enough' would have shipped six months earlier.",
      ] },
    ],
  },
  {
    slug: "writing-the-handoff",
    title: "Writing the handoff",
    excerpt: "Why every system we ship comes with a written operations manual — and what should be in it.",
    date: "Mar 2, 2026",
    readingTime: 4,
    category: "Studio notes",
    hue: "from-stone-800 via-zinc-900 to-neutral-950",
    body: [
      { heading: "The system isn't done until the doc is", paragraphs: [
        "A system without a written handoff is an obligation, not an asset. When the original builder leaves, the system goes with them.",
        "We write the handoff in plain language: what the system does, what it touches, what to watch, what to do when each known failure happens.",
      ] },
    ],
  },
  {
    slug: "small-models-real-jobs",
    title: "Small models, real jobs",
    excerpt: "The case for using smaller, faster, cheaper models for the unglamorous 80% of AI work.",
    date: "Feb 14, 2026",
    readingTime: 6,
    category: "AI",
    hue: "from-emerald-800 via-green-900 to-teal-950",
    body: [
      { heading: "Frontier models are not the default", paragraphs: [
        "The default has quietly become 'use the biggest model and figure out cost later.' For most production jobs this is wrong by a factor of ten.",
        "Classification, extraction, routing, summarization — all jobs where a small, fast, cheap model with a tight prompt will outperform a frontier model with a sloppy one.",
      ] },
    ],
  },
];
