import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/LinkedinIcon";
import { GithubIcon } from "@/components/shared/GithubIcon";
import { profile } from "@/content/data/profile";

const FOOTER_LINKS = [
  { label: "אודות",     href: "/about"    },
  { label: "פרויקטים", href: "/projects"  },
  { label: "בלוג",     href: "/blog"      },
  { label: "צור קשר",  href: "/contact"   },
];

export function Footer({ locale: _locale }: { locale: string }) {
  return (
    <footer className="border-t border-[var(--border)] mt-auto" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-semibold text-sm">
              <span className="gradient-text">{profile.nameHe}</span>
            </p>
            <p className="text-[var(--muted)] text-xs mt-1">מהנדס בכיר לאבטחת סייבר ותשתיות</p>
          </div>

          {/* Links */}
          <nav aria-label="ניווט פוטר">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xs text-[var(--muted)]">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[var(--foreground)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {profile.social.github && (
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                <GithubIcon size={16} />
              </a>
            )}
            {profile.social.linkedin && (
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                <LinkedinIcon size={16} />
              </a>
            )}
            {profile.social.email && (
              <a href={`mailto:${profile.social.email}`} aria-label="אימייל" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                <Mail size={16} />
              </a>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} יניב פרצובסקי. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
