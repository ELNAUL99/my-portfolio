// Each project supports an optional `img` (image/gif) and `video` (mp4/webm).
// Leave both empty to show a "Demo coming soon" placeholder — drop your gif/video
// into /public/projects and point `img` or `video` at it (e.g. '/projects/regulens.mp4').
export const projects = [
  {
    id: 1,
    img: '',
    video: '/projects/ReguLens.mov',
    title: 'ReguLens',
    description: `Grew out of Lexicon.AI, the 48-hour prototype that took shared 1st place at the Norrin Challenge (AI for Good Hackathon). ReguLens is a 7-agent LLM pipeline (Leader → Intake → Extraction → Retrieval → Assessment → Critique → Report) that produces cited legal opinions on EU AI Act compliance from plain-English descriptions or uploaded technical documents. Uses RAG-based regulatory retrieval (bge-m3 embeddings + pgvector) with every claim validated against Zod schemas before persistence.`,
    tags: ['React 19', 'TypeScript', 'TanStack Start', 'Supabase', 'Mistral', 'Llama-3.1-8B', 'RAG'],
    liveLink: 'https://regulens-mu.vercel.app',
    ghLink: 'https://github.com/ELNAUL99/regulens',
  },
  {
    id: 2,
    img: '',
    video: '/projects/Chatbot.mov',
    title: 'Q&A Chatbot for Local Business',
    description: `A reusable, context-aware chatbot framework for local businesses, powered by Groq AI. Ships with a full GitHub Actions CI/CD pipeline — parallel typecheck, lint, Vitest, and CodeQL security scanning — and automated Vercel deployments on every push.`,
    tags: ['Next.js', 'PostgreSQL', 'Supabase', 'Groq AI', 'GitHub Actions', 'Vitest'],
    liveLink: 'https://my-chatbot-app-chi.vercel.app',
    ghLink: 'https://github.com/ELNAUL99/my-chatbot-app',
  },
  {
    id: 3,
    img: '',
    video: '/projects/3ccleaning.mov',
    title: '3C Cleaning Website',
    description: `A bilingual (FI/EN) customer-facing website built on Next.js 14 and TypeScript, serving as the company's primary lead-generation channel. Features full i18n with react-i18next, a booking form with EmailJS integration, a testimonial carousel, and an FAQ accordion. Migrated from Create React App to the Next.js App Router for improved SEO and performance.`,
    tags: ['Next.js 14', 'TypeScript', 'SCSS', 'react-i18next', 'EmailJS'],
    liveLink: 'https://www.3ccleaning.fi',
    ghLink: '',
  },
  {
    id: 4,
    img: '',
    video: '/projects/TileBound.mov',
    title: 'Tile Bound',
    description: `A tile-based puzzle game built with Unity and C#. Playable directly in the browser on itch.io.`,
    tags: ['Unity', 'C#', 'Game Dev'],
    liveLink: 'https://scooter5826.itch.io/tilebound',
    ghLink: '',
  },
];
