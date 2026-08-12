import { Icon } from "./Icon";

export function ProfileBar({ target }: { target?: string }) {
  return (
    <div className="flex w-full shrink-0 items-center gap-4 border-b border-outline-variant bg-surface-container-low px-margin-mobile py-2 md:px-margin-desktop">
      <Icon name="school" className="text-secondary" />
      <p className="text-label-md text-secondary">Rahul Sharma | Class 12 | PCM</p>
      {target && (
        <span className="ml-auto rounded-full bg-surface-container-high px-3 py-1 text-label-sm text-on-surface-variant">
          {target}
        </span>
      )}
    </div>
  );
}