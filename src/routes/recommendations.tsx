import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { TopNav } from "@/components/TopNav";
import { ProfileBar } from "@/components/ProfileBar";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/recommendations")({
  head: () => ({
    meta: [
      { title: "Career Recommendations — PathWise" },
      {
        name: "description",
        content:
          "Top course and career recommendations matched to your aptitude assessment, with match scores and skill highlights.",
      },
      { property: "og:title", content: "Career Recommendations — PathWise" },
      {
        property: "og:description",
        content: "See the education paths where your unique skills shine.",
      },
    ],
  }),
  component: Recommendations,
});

const cards = [
  {
    icon: "computer",
    title: "B.Tech in Computer Science",
    match: "98% Match",
    accent: "border-secondary",
    iconBg: "bg-secondary-container text-on-secondary-container",
    body: "Your high scores in Math and Logic, combined with interest in problem-solving, make Computer Science an ideal fit. Your assessment indicates a strong aptitude for algorithmic thinking and structural design.",
    tags: ["Algorithms", "Data Structures", "Software Eng"],
  },
  {
    icon: "architecture",
    title: "B.Design (Product)",
    match: "92% Match",
    accent: "border-teal",
    iconBg: "bg-[#E0F2FE] text-[#0369A1]",
    body: "Your secondary traits show a strong inclination towards spatial reasoning and user-centric problem solving. Product Design bridges your technical logical skills with creative execution perfectly.",
    tags: ["UX/UI", "Ergonomics", "Prototyping"],
  },
  {
    icon: "history_edu",
    title: "Liberal Arts & Tech",
    match: "85% Match",
    accent: "border-amber",
    iconBg: "bg-[#FEF3C7] text-[#B45309]",
    body: "A unique intersection combining your high analytical scores with a broad foundational understanding. This path prepares you for roles requiring deep critical thinking and tech-literacy, like tech policy or systems analysis.",
    tags: ["Critical Thinking", "Tech Policy", "Ethics"],
  },
];

const categories = ["STEM Focus", "Creative Arts", "Humanities"];

function Recommendations() {
  const [selected, setSelected] = useState<string[]>([]);
  const [cats, setCats] = useState<string[]>(["STEM Focus"]);

  const toggle = (list: string[], value: string) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  return (
    <div className="flex min-h-screen flex-col">
      <TopNav active="My Path" />
      <ProfileBar />
      <main className="mx-auto flex w-full max-w-container-max flex-grow flex-col gap-gutter px-margin-mobile py-8 md:flex-row md:px-margin-desktop">
        <aside className="mb-8 w-full flex-shrink-0 md:mb-0 md:w-64">
          <div className="sticky top-32">
            <h2 className="mb-6 text-headline-md text-on-surface">Filters</h2>
            <div className="space-y-4">
              <h3 className="text-label-md tracking-wider text-on-surface-variant uppercase">
                Categories
              </h3>
              {categories.map((c) => (
                <label
                  key={c}
                  className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-surface-container-high"
                >
                  <input
                    type="checkbox"
                    checked={cats.includes(c)}
                    onChange={() => setCats((v) => toggle(v, c))}
                    className="h-5 w-5 rounded border-outline accent-[#006a61]"
                  />
                  <span className="text-body-md text-on-surface">{c}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex flex-grow flex-col gap-8">
          <header>
            <h1 className="mb-2 text-headline-lg-mobile text-primary md:text-headline-xl">
              Top Career Recommendations for Rahul.
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Based on your recent assessment, we've identified paths where your unique skills shine.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-gutter xl:grid-cols-2">
            {cards.map((c) => {
              const isSelected = selected.includes(c.title);
              return (
                <article
                  key={c.title}
                  className={`hover-lift flex flex-col rounded-xl border-t-4 bg-surface-container-lowest p-6 shadow-level1 ${c.accent}`}
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${c.iconBg}`}
                      >
                        <Icon name={c.icon} />
                      </div>
                      <div>
                        <h3 className="text-headline-md text-on-surface">{c.title}</h3>
                        <div className="mt-1 inline-flex items-center rounded-full bg-surface-container px-2 py-1 text-label-sm text-on-surface">
                          {c.match}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelected((v) => toggle(v, c.title))}
                      className="group flex shrink-0 items-center"
                    >
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded border-2 transition-colors ${
                          isSelected ? "border-secondary bg-secondary" : "border-outline"
                        }`}
                      >
                        <Icon
                          name="check"
                          className={`text-[16px] text-on-secondary ${isSelected ? "" : "opacity-0"}`}
                        />
                      </span>
                      <span className="ml-2 text-left text-label-md text-on-surface-variant transition-colors group-hover:text-secondary">
                        Select for Simulator
                      </span>
                    </button>
                  </div>
                  <p className="mb-6 flex-grow text-body-md text-on-surface-variant">{c.body}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-surface px-3 py-1 text-label-sm text-on-surface"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              to="/simulator"
              className="rounded-lg bg-amber px-8 py-3 text-label-md text-on-primary shadow-sm transition-colors hover:bg-amber-dark"
            >
              Launch Simulator
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}