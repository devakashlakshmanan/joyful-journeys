const links = ["Resources", "About Us", "Contact", "Privacy Policy", "Terms of Service"];

export function SiteFooter() {
  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-between gap-8 bg-primary px-margin-mobile py-12 text-on-primary md:flex-row md:px-margin-desktop">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <span className="text-headline-md font-bold text-on-primary">PathWise</span>
        <p className="text-body-md text-primary-fixed-dim">
          © 2024 PathWise Education. Empowering Indian Students.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {links.map((l) => (
          <a
            key={l}
            href="#"
            className="text-label-sm text-primary-fixed-dim transition-colors hover:text-on-primary"
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}