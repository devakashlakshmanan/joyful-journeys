import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { TopNav } from "@/components/TopNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PathWise — Your Journey, Decoded" },
      {
        name: "description",
        content:
          "Education path simulator for Indian students in Class 10, 12 and UG. Aptitude assessment, career recommendations, colleges and scholarships.",
      },
      { property: "og:title", content: "PathWise — Your Journey, Decoded" },
      {
        property: "og:description",
        content:
          "Simulate education paths, compare colleges and find scholarships with data-driven insights built for Indian students.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col text-on-background">
      <TopNav active="My Path" />
      <main className="flex flex-grow flex-col">
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-primary px-margin-mobile py-24 text-center text-on-primary md:px-margin-desktop md:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="z-10 mx-auto flex max-w-container-max flex-col items-center gap-6">
            <h1 className="max-w-4xl text-headline-lg-mobile tracking-tight md:text-headline-xl">
              Your Journey, Decoded.
            </h1>
            <p className="max-w-2xl text-body-lg text-primary-fixed-dim">
              The first education path simulator designed specifically for Indian students in Class
              10, 12, and UG. Discover your potential with data-driven insights.
            </p>
            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link
                to="/assessment"
                className="flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-4 text-label-md font-semibold text-on-primary shadow-level1 transition-all hover:bg-amber-dark"
              >
                Start Your Aptitude Assessment
                <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative z-20 bg-background px-margin-mobile py-24 md:px-margin-desktop">
          <div className="mx-auto max-w-container-max">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-headline-md text-on-surface">How it Works</h2>
              <p className="mx-auto max-w-2xl text-body-md text-on-surface-variant">
                Three simple steps to gain clarity on your educational future.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
              <Step
                icon="assignment"
                step="Step 1"
                title="Assessment"
                body="Take our comprehensive, culturally calibrated aptitude and interest test to uncover your core strengths."
              >
                <div className="mt-4 w-full">
                  <div className="h-2 overflow-hidden rounded-full bg-primary-container">
                    <div className="h-full w-1/3 rounded-full bg-secondary" />
                  </div>
                </div>
              </Step>
              <Step
                icon="route"
                step="Step 2"
                title="Simulation"
                body="Explore thousands of career trajectories mapped to actual Indian university curricula and job market data."
              >
                <div className="relative mt-4 flex h-32 w-full items-center justify-center overflow-hidden rounded-lg bg-surface-variant">
                  <Icon name="monitoring" className="text-4xl text-outline opacity-50" />
                </div>
              </Step>
              <Step
                icon="workspace_premium"
                step="Step 3"
                title="Success"
                body="Receive a personalized, step-by-step actionable roadmap to your ideal college and career."
              >
                <div className="mt-4 flex flex-wrap gap-2">
                  {["College List", "Scholarships"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-container-high px-3 py-1 text-label-sm text-on-surface"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Step>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Step({
  icon,
  step,
  title,
  body,
  children,
}: {
  icon: string;
  step: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className="hover-lift flex flex-col items-start gap-4 rounded-card bg-surface-container-lowest p-6 shadow-level1">
      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-low text-secondary">
        <Icon name={icon} className="text-2xl" />
      </div>
      <div className="flex items-center gap-2">
        <span className="rounded-md bg-primary-fixed px-2 py-1 text-label-sm text-on-primary-fixed">
          {step}
        </span>
        <h3 className="text-headline-md text-on-surface">{title}</h3>
      </div>
      <p className="flex-grow text-body-md text-on-surface-variant">{body}</p>
      {children}
    </div>
  );
}
