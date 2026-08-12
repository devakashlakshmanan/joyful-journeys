import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { TopNav } from "@/components/TopNav";
import { ProfileBar } from "@/components/ProfileBar";

export const Route = createFileRoute("/simulator")({
  head: () => ({
    meta: [
      { title: "Path Simulator — PathWise" },
      {
        name: "description",
        content:
          "Compare education paths side by side: milestones, costs, forks and outcomes for B.Tech, B.Sc and study-abroad routes.",
      },
      { property: "og:title", content: "Path Simulator — PathWise" },
      {
        property: "og:description",
        content: "Simulate and compare two education paths milestone by milestone.",
      },
    ],
  }),
  component: Simulator,
});

function Simulator() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background text-on-background">
      <TopNav active="My Path" showSearch />
      <ProfileBar target="Target: B.Tech / MS" />
      <main className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col gap-gutter overflow-y-auto bg-background p-margin-mobile md:flex-row md:p-margin-desktop">
          {/* Path A */}
          <div className="relative flex min-w-[320px] flex-1 flex-col">
            <div className="sticky top-0 z-10 mb-8 rounded-xl border-t-4 border-secondary bg-surface-container-lowest p-6 shadow-level1">
              <div className="mb-2 flex items-start justify-between">
                <h2 className="text-headline-md text-primary">B.Tech CSE at Tier 1</h2>
                <Icon name="verified" className="text-secondary" filled />
              </div>
              <p className="text-body-md text-on-surface-variant">
                Traditional high-competition route focusing on premier Indian institutes.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded bg-surface-variant px-2 py-1 text-label-sm text-on-surface-variant">
                  High ROI
                </span>
                <span className="rounded bg-error-container px-2 py-1 text-label-sm text-on-error-container">
                  High Comp
                </span>
              </div>
            </div>

            <div className="relative flex-1 pb-12 pl-6">
              <div className="absolute top-4 bottom-0 left-[39px] w-[2px] rounded-full bg-outline-variant">
                <div className="absolute top-0 left-0 h-[40%] w-full rounded-full bg-secondary" />
              </div>

              <div className="group relative mb-12 cursor-pointer">
                <div className="absolute top-4 left-[-39px] z-10 flex h-8 w-8 items-center justify-center rounded-full bg-secondary shadow-md ring-4 ring-background transition-transform group-hover:scale-110">
                  <Icon name="menu_book" className="text-[16px] text-on-secondary" />
                </div>
                <div className="ml-6 rounded-xl border border-transparent bg-surface-container-lowest p-5 shadow-level1 transition-colors hover:border-secondary">
                  <div className="mb-1 text-label-sm font-bold text-secondary">YEAR 1-2</div>
                  <h3 className="mb-2 text-label-md text-primary">Core Engineering &amp; JEE Prep</h3>
                  <p className="mb-4 text-body-md text-on-surface-variant">
                    Intensive preparation for joint entrance examinations alongside core subjects.
                  </p>
                  <div className="flex items-center justify-between border-t border-surface-container-high pt-3">
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <Icon name="account_balance" className="text-[16px]" />
                      <span className="text-label-sm">Running Cost: ₹2.5L</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative mb-12 cursor-pointer">
                <div className="absolute top-4 left-[-39px] z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-secondary bg-surface-container-lowest shadow-md ring-4 ring-background transition-transform group-hover:scale-110">
                  <Icon name="school" className="text-[16px] text-secondary" />
                </div>
                <div className="ml-6 rounded-xl border border-transparent bg-surface-container-lowest p-5 shadow-level1 ring-1 ring-secondary/20 transition-colors hover:border-secondary">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="mb-1 text-label-sm font-bold text-secondary">MILESTONE</div>
                      <h3 className="mb-2 text-label-md text-primary">IIT/NIT Admission</h3>
                    </div>
                    <span className="flex items-center gap-1 rounded border border-[#fcd34d] bg-[#fef3c7] px-2 py-1 text-label-sm text-[#92400e]">
                      <Icon name="star" className="text-[14px]" />
                      Scholarship Eligible
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-surface-container-low p-3">
                    <span className="text-label-sm text-on-surface-variant">Cumulative Est.</span>
                    <span className="text-label-md font-bold text-primary">₹12.0L - ₹15.0L</span>
                  </div>
                </div>
              </div>

              <div className="relative mb-12">
                <div className="absolute top-4 left-[-39px] z-10 flex h-8 w-8 items-center justify-center rounded-full bg-outline-variant ring-4 ring-background">
                  <Icon name="call_split" className="text-[16px] text-surface-container-lowest" />
                </div>
                <div className="ml-6">
                  <div className="mb-4 ml-2 text-label-sm font-bold text-on-surface-variant">
                    YEAR 3-4 (SPECIALIZATION FORK)
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 cursor-pointer rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest p-4 shadow-sm transition-all hover:border-secondary hover:shadow-md">
                      <h4 className="text-label-md text-primary">AI &amp; Mach. Learning</h4>
                      <p className="mt-1 text-label-sm text-on-surface-variant">
                        High demand, research focused.
                      </p>
                    </div>
                    <div className="flex-1 cursor-pointer rounded-xl border border-outline-variant bg-surface-container-lowest p-4 opacity-60 shadow-sm transition-all hover:border-secondary hover:shadow-md">
                      <h4 className="text-label-md text-primary">Cyber Security</h4>
                      <p className="mt-1 text-label-sm text-on-surface-variant">
                        Industry direct, specialized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative cursor-pointer">
                <div className="absolute top-4 left-[-39px] z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-md ring-4 ring-background transition-transform group-hover:scale-110">
                  <Icon name="assignment" className="text-[16px] text-on-primary" />
                </div>
                <div className="ml-6 rounded-xl border border-transparent bg-surface-container-lowest p-5 shadow-level1 transition-colors hover:border-primary">
                  <div className="mb-1 text-label-sm font-bold text-primary">POST GRADUATION</div>
                  <h3 className="mb-2 text-label-md text-primary">GATE Preparation</h3>
                  <p className="text-body-md text-on-surface-variant">
                    Targeting M.Tech or PSU placements natively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Path B */}
          <div className="relative flex min-w-[320px] flex-1 flex-col">
            <div className="sticky top-0 z-10 mb-8 rounded-xl border-t-4 border-primary bg-surface-container-lowest p-6 opacity-80 shadow-level1 transition-opacity hover:opacity-100">
              <div className="mb-2 flex items-start justify-between">
                <h2 className="text-headline-md text-primary">B.Sc DS + MS Abroad</h2>
                <Icon name="public" className="text-outline" filled />
              </div>
              <p className="text-body-md text-on-surface-variant">
                Global exposure route focusing on specialized foundational degrees.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded bg-surface-variant px-2 py-1 text-label-sm text-on-surface-variant">
                  Global
                </span>
                <span className="rounded bg-secondary-container px-2 py-1 text-label-sm text-on-secondary-container">
                  High Cost
                </span>
              </div>
            </div>

            <div className="relative flex-1 pb-12 pl-6">
              <div className="absolute top-4 bottom-0 left-[39px] w-[2px] rounded-full bg-outline-variant" />
              <div className="relative mb-12 cursor-pointer opacity-70 transition-opacity hover:opacity-100">
                <div className="absolute top-4 left-[-39px] z-10 flex h-8 w-8 items-center justify-center rounded-full bg-outline-variant ring-4 ring-background">
                  <Icon name="menu_book" className="text-[16px] text-surface-container-lowest" />
                </div>
                <div className="ml-6 rounded-xl border border-transparent bg-surface-container-lowest p-5 shadow-sm">
                  <div className="mb-1 text-label-sm font-bold text-outline">YEAR 1-3</div>
                  <h3 className="mb-2 text-label-md text-primary">
                    B.Sc Data Science (Tier 2/Private)
                  </h3>
                  <div className="mt-4 flex items-center justify-between border-t border-surface-container-high pt-3">
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <Icon name="account_balance" className="text-[16px]" />
                      <span className="text-label-sm">Running Cost: ₹8.0L</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mb-12 cursor-pointer opacity-70 transition-opacity hover:opacity-100">
                <div className="absolute top-4 left-[-39px] z-10 flex h-8 w-8 items-center justify-center rounded-full bg-outline-variant ring-4 ring-background">
                  <Icon name="flight_takeoff" className="text-[16px] text-surface-container-lowest" />
                </div>
                <div className="ml-6 rounded-xl border border-transparent bg-surface-container-lowest p-5 shadow-sm">
                  <div className="mb-1 text-label-sm font-bold text-outline">MILESTONE</div>
                  <h3 className="mb-2 text-label-md text-primary">GRE &amp; IELTS Prep</h3>
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-surface-container-low p-3">
                    <span className="text-label-sm text-on-surface-variant">Cumulative Est.</span>
                    <span className="text-label-md font-bold text-primary">₹10.5L</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <aside className="z-20 hidden w-[420px] shrink-0 flex-col border-l border-outline-variant bg-surface-container-lowest shadow-level2 lg:flex">
          <div className="border-b border-surface-container-high bg-primary p-6 text-on-primary">
            <div className="mb-4 flex items-start justify-between">
              <div className="inline-flex rounded-lg bg-primary-container p-2">
                <Icon name="school" className="text-secondary-fixed" />
              </div>
              <button
                type="button"
                className="text-on-primary-container transition-colors hover:text-on-primary"
              >
                <Icon name="close" />
              </button>
            </div>
            <h2 className="mb-1 text-headline-md font-bold">IIT/NIT Admission</h2>
            <p className="text-label-sm text-on-primary-container">Milestone Node Breakdown</p>
          </div>

          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6">
            <div className="flex flex-col justify-center rounded-xl border border-surface-container-high bg-surface-container-low p-4">
              <span className="mb-1 text-label-sm tracking-wider text-on-surface-variant uppercase">
                Acceptance Rate
              </span>
              <div className="flex items-end gap-2">
                <span className="text-headline-lg leading-none text-primary">1.2%</span>
                <span className="mb-1 flex items-center text-label-sm font-bold text-error">
                  <Icon name="arrow_downward" className="text-[14px]" /> Highly Competitive
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 rounded-xl border border-surface-container-high bg-surface-container-low p-4">
                <span className="mb-2 block text-label-sm tracking-wider text-on-surface-variant uppercase">
                  Avg. Package
                </span>
                <span className="block text-headline-md text-secondary">₹18-24L</span>
                <span className="mt-1 text-label-sm text-on-surface-variant">Per Annum</span>
              </div>
              <div className="flex-1 rounded-xl border border-surface-container-high bg-surface-container-low p-4">
                <span className="mb-2 block text-label-sm tracking-wider text-on-surface-variant uppercase">
                  Duration
                </span>
                <span className="block text-headline-md text-primary">4 Yrs</span>
                <span className="mt-1 text-label-sm text-on-surface-variant">Full Time</span>
              </div>
            </div>

            <div className="mt-2 rounded-xl border border-outline-variant bg-surface-container-lowest p-4 shadow-sm">
              <h4 className="mb-3 flex items-center gap-2 text-label-md text-primary">
                <Icon name="checklist" className="text-[18px]" /> Key Requirements
              </h4>
              <ul className="space-y-3">
                {[
                  ["JEE Main Qualification", "Top 2.5 Lakh students", true],
                  ["JEE Advanced", "Required for IITs specifically", true],
                  ["Board Score 75%+", "Mandatory eligibility criteria", false],
                ].map(([title, sub, done]) => (
                  <li key={String(title)} className="flex items-start gap-3">
                    <Icon
                      name={done ? "check_circle" : "radio_button_unchecked"}
                      className={`mt-0.5 text-[20px] ${done ? "text-secondary" : "text-outline"}`}
                    />
                    <div>
                      <span className="block text-label-sm text-primary">{title}</span>
                      <span className="text-label-sm font-normal text-on-surface-variant">{sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-surface-container-high bg-surface-container-lowest p-6">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber py-3 text-label-md font-bold text-on-primary shadow-md transition-colors duration-150 hover:bg-amber-dark active:scale-95"
            >
              <Icon name="explore" />
              Explore Associated Colleges
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}