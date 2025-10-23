import { useEffect } from 'react';
import { ArrowUpRight, Code2, FileText, Github, Globe2, Linkedin, Orbit } from 'lucide-react';

const quickLinks = [
  {
    label: 'Resume',
    description: 'Download my latest CV in PDF format.',
    href: '/Tollan_Berhanu_Resume.pdf',
    icon: FileText,
    external: true,
  },
  {
    label: 'LinkedIn',
    description: 'Professional network and recent updates.',
    href: 'https://www.linkedin.com/in/tollan-s-berhanu/',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    description: 'Open-source projects and research prototypes.',
    href: 'https://github.com/TollanBerhanu',
    icon: Github,
    external: true,
  },
  {
    label: 'LeetCode',
    description: 'Algorithm practice and interview prep progress.',
    href: 'https://leetcode.com/tollan',
    icon: Code2,
    external: true,
  },
  {
    label: 'ORCID',
    description: 'Research identifiers and academic publications.',
    href: 'https://orcid.org/0009-0007-8631-5829',
    icon: Orbit,
    external: true,
  },
  {
    label: 'Portfolio Home Page',
    description: 'Return to tollanberhanu.dev for the full story.',
    href: '/',
    icon: Globe2,
    external: false,
  },
];

const Links = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Tollan Berhanu | Quick Links';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.25))]" />
      </div>

      <div className="w-full max-w-xl space-y-10 text-center">
        <div className="space-y-6">
          <div className="mx-auto flex h-16 w-56 items-center justify-center rounded-2xl border border-border/60 bg-primary/10 text-2xl font-semibold text-primary shadow-[0_18px_40px_-24px_hsl(var(--primary)/0.7)]">
            Tollan Berhanu
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Connect with ME!</h1>
            <p className="text-sm text-muted-foreground sm:text-base">
              Want to know more about me? You may explore my links below.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = link.external || link.href.startsWith('http');

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card/70 px-5 py-4 text-left transition-all duration-200 hover:-translate-y-[2px] hover:border-primary/60 hover:bg-card/80"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-foreground">
                      {link.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {link.description}
                    </span>
                  </span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground">
          Tip: Add this page to your bookmarks or share the QR code so teammates can reach the right destination instantly.
        </p>
      </div>
    </div>
  );
};

export default Links;
