"use client";
import Link from "next/link";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  behance?: string;
  npm?: string;
  nda?: boolean;
  ndaNote?: string;
};

type Category = {
  key: string;
  label: string;
  icon: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    key: "ai",
    label: "AI Projects",
    icon: "⬡",
    projects: [
      {
        id: "mm-hw-recognizer",
        title: "Myanmar Handwriting Recognition",
        description:
          "AI-powered deep learning system for recognizing and classifying handwritten Burmese characters.",
        tags: ["Python", "Deep Learning", "OCR", "Burmese NLP"],
      },
      {
        id: "qbiv",
        title: "Query Based Intelligence Visualization",
        description:
          "Cross-platform desktop BI tool with AI-powered natural language query builder and interactive chart dashboards.",
        tags: ["TypeScript", "React", "Electron", "AI"],
        github: "https://github.com/sai-zack-dev/query-based-intelligence-visualization",
        live: "https://qbiv.netlify.app/",
      },
      {
        id: "elyza",
        title: "Elyza — Myanmar Chatbot",
        description:
          "A rule-based Myanmar language chatbot with emotion detection, served as a Flask REST API.",
        tags: ["Python", "Flask", "NLP", "Emotion Detection"],
        github: "https://github.com/sai-zack-dev/myanmar-chatbot",
      },
      {
        id: "mm-hw-collector",
        title: "Burmese Handwriting Dataset Collector",
        description:
          "A data collection tool for gathering high-quality handwritten Burmese character samples for ML training.",
        tags: ["Python", "Dataset", "ML Pipeline", "Burmese"],
      },
    ],
  },
  {
    key: "design",
    label: "Design Projects",
    icon: "◈",
    projects: [
      {
        id: "pocket-dev-env",
        title: "Pocket Dev Env",
        description:
          "A mobile IDE concept UI design for a full development environment on smartphones.",
        tags: ["UI/UX", "Mobile", "Concept", "Figma"],
        behance: "https://www.behance.net/gallery/247812563/Pocket-Dev-Env",
      },
      {
        id: "flat-sync",
        title: "FlatSync",
        description:
          "Flatmate and shared room management system — communication, task management, and expense tracking.",
        tags: ["UI/UX", "Product Design", "Figma", "Mobile"],
      },
      {
        id: "say-cheese",
        title: "Say Cheese",
        description:
          "A simple photobooth and social media app design for youthful, playful audiences.",
        tags: ["UI/UX", "Social", "Mobile", "Figma"],
        behance: "https://www.behance.net/gallery/247834821/Say-Cheese-",
      },
      {
        id: "easy-clean",
        title: "Easy Clean",
        description:
          "A photo cleaning app with a Tinder-style swipe interface for decluttering photo libraries.",
        tags: ["UI/UX", "Mobile", "Concept", "Figma"],
      },
    ],
  },
  {
    key: "professional",
    label: "Professional Projects",
    icon: "◻",
    projects: [
      {
        id: "service-ticket",
        title: "ServicePro — Ticket Management",
        description:
          "Enterprise service ticket management with escalation chains, SLA tracking, and reporting dashboards.",
        tags: ["Enterprise", "Full Stack", "Support System"],
        live: "https://myansis.com/products/servicepro",
        nda: true,
        ndaNote: "Developed under NDA at Myansis.",
      },
      {
        id: "school-management",
        title: "SchoolPro — School Management",
        description:
          "All-in-one school administration platform covering students, grades, timetables, and parent portals.",
        tags: ["Enterprise", "Full Stack", "EdTech"],
        live: "https://myansis.com/products/schoolpro",
        nda: true,
        ndaNote: "Developed under NDA at Myansis.",
      },
      {
        id: "cms-panel",
        title: "Website CMS Panel",
        description:
          "Custom CMS panel for managing dynamic website content, media assets, and publishing workflows.",
        tags: ["CMS", "Full Stack", "Client Work"],
        nda: true,
        ndaNote: "Confidential — client privacy policy.",
      },
      {
        id: "ecommerce",
        title: "E-commerce Websites",
        description:
          "Multiple client e-commerce platforms with product catalogs, cart, payment gateways, and admin dashboards.",
        tags: ["E-commerce", "Full Stack", "Client Work"],
        nda: true,
        ndaNote: "Confidential — client privacy policy.",
      },
    ],
  },
  {
    key: "fun",
    label: "Fun Projects",
    icon: "✦",
    projects: [
      {
        id: "valentine-letter",
        title: "Valentine Love Letter Generator",
        description:
          "A fun web app that generates personalized love letters for Valentine's Day 2026.",
        tags: ["JavaScript", "HTML/CSS", "Fun", "Creative"],
        live: "https://valentine-love-letter-2026.netlify.app/",
      },
      {
        id: "mini-games",
        title: "Mini Games Collection",
        description:
          "A collection of mini-games built with HTML, CSS, JavaScript, and Scratch with clean design and gameplay.",
        tags: ["JavaScript", "HTML/CSS", "Scratch", "Games"],
        live: "https://saiz-mini-games-collection.netlify.app/",
      },
      {
        id: "nezt",
        title: "NEZT CLI",
        description:
          "Scaffold fully configured Next.js and Nuxt.js projects with routing, themes, and pages in minutes.",
        tags: ["CLI", "Node.js", "Next.js", "Nuxt.js"],
        github: "https://github.com/sai-zack-dev/nezt",
        npm: "https://www.npmjs.com/package/nezt-cli",
      },
      {
        id: "dataset-translator",
        title: "Dataset Translator",
        description:
          "CLI tool for translating English text datasets into Burmese using the Gemini API with batch processing.",
        tags: ["CLI", "Node.js", "Gemini API", "NLP"],
        github: "https://github.com/sai-zack-dev/dataset-translator",
        npm: "https://www.npmjs.com/package/dataset-translator",
      },
      {
        id: "burmese-quote-generator",
        title: "Burmese Quote Generator",
        description:
          "CLI tool to generate emotion-tagged Burmese quotes using Gemini API in TXT or CSV format.",
        tags: ["CLI", "Node.js", "Gemini API", "Burmese"],
        github: "https://github.com/sai-zack-dev/burmese-quote-generator",
        npm: "https://www.npmjs.com/package/burmese-quote-generator",
      },
    ],
  },
];

const langColors: Record<string, string> = {
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  CSS: "#1572B6",
  PHP: "#777BB4",
};

const allLangs = ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "PHP"];

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.key === activeCategory);

  return (
    <div className="w-full space-y-16">
      {/* Language Bar */}
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-mono">
          Most Used Languages
        </p>
        <div className="flex flex-wrap gap-2">
          {allLangs.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: langColors[lang] }}
              />
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all ${
            activeCategory === "all"
              ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100"
              : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all ${
              activeCategory === cat.key
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100"
                : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-500"
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Project Groups */}
      {filteredCategories.map((category) => (
        <section key={category.key} className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">{category.icon}</span>
            <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {category.label}
            </h2>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600">
              {category.projects.length} projects
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative flex flex-col gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-sm transition-all duration-200 cursor-pointer"
    >
      {/* NDA badge */}
      {project.nda && (
        <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30">
          NDA
        </span>
      )}

      <div className="space-y-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug pr-10 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>
        {project.nda && project.ndaNote && (
          <p className="text-[10px] font-mono text-amber-600 dark:text-amber-500 italic">
            ⚠ {project.ndaNote}
          </p>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* External link chips (decorative, non-clickable since card is already a link) */}
      {(project.github || project.live || project.behance || project.npm) && (
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-zinc-100 dark:border-zinc-800">
          {project.github && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500">
              GitHub
            </span>
          )}
          {project.live && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500">
              Live
            </span>
          )}
          {project.behance && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500">
              Behance
            </span>
          )}
          {project.npm && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500">
              npm
            </span>
          )}
          <span className="ml-auto text-[10px] font-mono text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
            View details →
          </span>
        </div>
      )}
    </Link>
  );
}