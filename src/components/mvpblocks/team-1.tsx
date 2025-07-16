'use client';
import { cn } from '@/lib/utils';
import teamContent from '@/utils/language-data/team-content';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

const RTL_LANGS = ['ur', 'ar', 'fa', 'he'];

export default function Team1({
  locale = 'en',
  className,
}: {
  locale?: keyof typeof teamContent;
  className?: string;
}) {
  const content = teamContent[locale] || teamContent['en'];
  const isRTL = RTL_LANGS.includes(locale);

  return (
    <section
      className={cn('relative mx-auto max-w-7xl py-16 md:py-24', className)}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {content.title}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {content.members.map((member) => (
            // @ts-ignore
            <TeamMemberCard key={member.name} member={member} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Team member card component
function TeamMemberCard({
  member,
  isRTL,
}: {
  member: {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
    location?: string;
    socialLinks?: { platform: 'github' | 'twitter' | 'linkedin'; url: string }[];
  };
  isRTL?: boolean;
}) {
  return (
    <div className="opacity-100 hover:opacity-75 transition-opacity group h-[420px] w-80 sm:w-96 overflow-hidden rounded-xl bg-card shadow-sm flex flex-col">
      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex h-[220px] flex-col p-5">
        {member.location && (
          <div
            className={`mb-1 flex items-center text-xs text-muted-foreground ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            {member.location}
          </div>
        )}

        <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
        <p className="mb-2 text-sm font-medium text-primary">{member.role}</p>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">{member.bio}</p>
        </div>
        <div className="mt-auto">
          {member.socialLinks && (
            <div className={`flex space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {member.socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {link.platform === 'github' && <GithubIcon className="h-4 w-4" />}
                  {link.platform === 'twitter' && <TwitterIcon className="h-4 w-4" />}
                  {link.platform === 'linkedin' && <LinkedinIcon className="h-4 w-4" />}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
