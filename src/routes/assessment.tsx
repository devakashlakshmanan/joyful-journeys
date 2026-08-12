import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Aptitude Assessment — PathWise" },
      {
        name: "description",
        content:
          "Share your class, board, stream and marks so PathWise can map the best education paths for you.",
      },
      { property: "og:title", content: "Aptitude Assessment — PathWise" },
      {
        property: "og:description",
        content: "Step 1 of the PathWise assessment: build your academic profile.",
      },
    ],
  }),
  component: Assessment,
});

const streams = [
  { value: "pcm", label: "PCM" },
  { value: "pcb", label: "PCB" },
  { value: "commerce", label: "Commerce" },
  { value: "arts", label: "Arts/Hum." },
];

function Assessment() {
  const navigate = useNavigate();
  const [stream, setStream] = useState("pcm");

  return (
    <div className="flex min-h-screen flex-col bg-background text-on-surface">
      <main className="mx-auto flex w-full max-w-container-max flex-grow flex-col gap-gutter p-margin-mobile pt-8 md:flex-row md:p-margin-desktop">
        <div className="order-2 mx-auto w-full max-w-2xl flex-1 md:order-1">
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-label-sm tracking-widest text-secondary uppercase">
                Step 1 of 3
              </span>
              <span className="text-label-sm text-on-surface-variant">Academic Profile</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
              <div className="h-full w-1/3 rounded-full bg-secondary transition-all duration-500 ease-in-out" />
            </div>
          </div>

          <div className="rounded-xl bg-surface-container-lowest p-6 shadow-level1 md:p-8">
            <div className="mb-8 border-b border-surface-container pb-4">
              <h1 className="mb-2 text-headline-lg-mobile text-primary md:text-headline-lg">
                Let's start with your academics.
              </h1>
              <p className="text-body-md text-on-surface-variant">
                Tell us where you currently stand so we can map the best path forward.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate({ to: "/recommendations" });
              }}
            >
              <div className="space-y-6">
                <Field label="Current Class" htmlFor="class-select">
                  <Select id="class-select" defaultValue="">
                    <option disabled value="">
                      Select your current class
                    </option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                    <option value="dropper">Dropper</option>
                  </Select>
                </Field>

                <Field label="Educational Board" htmlFor="board-select">
                  <Select id="board-select" defaultValue="">
                    <option disabled value="">
                      Select your board
                    </option>
                    <option value="cbse">CBSE</option>
                    <option value="icse">ICSE / ISC</option>
                    <option value="state">State Board</option>
                    <option value="ib">IB / Cambridge</option>
                  </Select>
                </Field>

                <div>
                  <span className="mb-3 block text-label-md text-on-surface">
                    Stream / Subjects (Select one)
                  </span>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {streams.map((s) => (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setStream(s.value)}
                        className={`rounded-lg border p-3 text-center transition-all ${
                          stream === s.value
                            ? "border-secondary bg-secondary-container text-on-secondary-container"
                            : "border-outline-variant hover:bg-surface-container"
                        }`}
                      >
                        <span className="block text-label-md">{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="mb-2 block text-label-md text-on-surface"
                    htmlFor="marks-input"
                  >
                    Aggregate Percentage (Last Exams)
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="marks-input"
                      type="number"
                      min={0}
                      max={100}
                      placeholder="e.g. 85"
                      className="block w-full rounded-md border border-outline-variant bg-surface-container-lowest py-3 pr-12 pl-4 text-body-md text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
                    />
                    <span className="absolute right-4 text-label-md text-on-surface-variant">%</span>
                  </div>
                  <p className="mt-1 text-label-sm text-on-surface-variant">
                    Estimate if results are awaited.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-amber px-8 py-3 text-label-md text-on-primary shadow-sm transition-colors hover:bg-amber-dark"
                >
                  Continue to Interests
                </button>
              </div>
            </form>
          </div>
        </div>

        <aside className="order-1 w-full md:order-2 md:w-80">
          <div className="sticky top-8 rounded-xl border border-surface-variant bg-surface-container-low p-6">
            <div className="flex items-start gap-3">
              <div className="shrink-0 rounded-lg bg-secondary/10 p-2 text-secondary">
                <Icon name="lightbulb" filled />
              </div>
              <div>
                <h2 className="mb-2 text-label-md text-primary">Why we ask this?</h2>
                <p className="mb-4 text-body-md text-on-surface-variant">
                  Your academic background is the foundation of our recommendations. We use this data
                  to filter out ineligible courses and highlight paths where students with your
                  profile historically excel.
                </p>
                <div className="flex items-center gap-2 rounded border border-surface-variant bg-surface-container-lowest p-3">
                  <Icon name="lock" className="text-sm text-secondary" />
                  <span className="text-label-sm text-on-surface-variant">
                    Your data is kept private and secure.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-label-md text-on-surface" htmlFor={htmlFor}>
        {label}
      </label>
      <div className="relative">
        {children}
        <Icon
          name="expand_more"
          className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-on-surface-variant"
        />
      </div>
    </div>
  );
}

function Select(props: React.ComponentProps<"select">) {
  return (
    <select
      {...props}
      className="block w-full appearance-none rounded-md border border-outline-variant bg-surface-container-lowest py-3 pr-10 pl-4 text-body-md text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
    />
  );
}