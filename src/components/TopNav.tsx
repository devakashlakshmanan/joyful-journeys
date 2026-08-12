import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Icon } from "./Icon";

const links = [
  { label: "Courses", to: "/recommendations" as const },
  { label: "Colleges", to: "/colleges" as const },
  { label: "Scholarships", to: "/colleges" as const },
  { label: "My Path", to: "/simulator" as const },
];

export function TopNav({ active, showSearch = false }: { active?: string; showSearch?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-on-primary shadow-md">
      <nav className="flex w-full items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-headline-md font-bold text-on-primary">
            PathWise
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={
                  active === l.label
                    ? "border-b-2 border-tertiary-fixed pb-1 text-label-md font-bold text-tertiary-fixed"
                    : "text-label-md text-on-primary-fixed-variant transition-colors duration-200 hover:text-tertiary-fixed"
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {showSearch && (
            <div className="relative hidden lg:block text-on-primary">
              <Icon
                name="search"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-on-primary-container"
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-64 rounded-full border border-surface-tint bg-primary-container py-2 pl-10 pr-4 text-label-md text-on-primary transition-all placeholder:text-on-primary-container focus:border-secondary-container focus:ring-1 focus:ring-secondary-container focus:outline-none"
              />
            </div>
          )}
          <Link
            to="/dashboard"
            aria-label="User Dashboard"
            className="flex items-center justify-center text-on-primary transition-colors duration-200 hover:text-tertiary-fixed"
          >
            <Icon name="account_circle" className="text-[28px]" filled />
          </Link>
          <button
            aria-label="Menu"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="flex flex-col gap-1 border-t border-surface-tint px-margin-mobile pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 text-label-md text-primary-fixed-dim"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}