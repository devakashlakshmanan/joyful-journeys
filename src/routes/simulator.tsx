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
  component: Simulator();
});

function Simulator() {
  return null;
}