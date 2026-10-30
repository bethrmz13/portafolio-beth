'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
import {
  type GitHubRepository,
  getRepositoryDisplayName,
} from '@/lib/github-shared';
import profilePicture from '../../img/profile-picture.png';
import './SocialMediaCarousel.css';

type SocialProfile = {
  id: string;
  featured?: boolean;
  name: string;
  category: string;
  href: string;
  copy: string;
  accent: string;
  icon: ReactNode;
  visual?: ReactNode;
};

type SocialMediaCarouselProps = {
  pinnedRepositories: GitHubRepository[];
};

const ExternalIcon = () => (
  <svg
    className="social-card-external"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect x="6.5" y="6.5" width="11" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M14 7.5h2.5V10M16.5 7.5 10 14"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
  </svg>
);

const CodeforcesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.5 7.5v12H2v-12h2.5zm5.5-4.5v16.5H7.5V3h2.5zm5.5 8.5v8H13v-8h2.5zm5.5-4.5v12.5H18.5V7h2.5z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 1.5 9.8 5.7l4.5.4-3.4 3 1 4.4L8 11.4l-3.9 2.1 1-4.4-3.4-3 4.5-.4L8 1.5Z" />
  </svg>
);

type GitHubVisualProps = {
  repositories: GitHubRepository[];
};

const GitHubVisual = ({ repositories }: GitHubVisualProps) => (
  <div className="social-visual social-visual-github">
    <div className="social-visual-window">
      <div className="social-visual-chrome">
        <span />
        <span />
        <span />
        <p>github.com/bethrmz13</p>
      </div>
      {repositories.length > 0 ? (
        <ul className="social-visual-repos">
          {repositories.map((repository) => {
            const language = repository.primaryLanguage;
            const displayName = getRepositoryDisplayName(repository);

            return (
              <li key={repository.id}>
                <a
                  className="social-visual-repo social-visual-repo-link"
                  href={repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{displayName}</p>
                  {repository.description ? (
                    <span className="social-visual-repo-desc">
                      {repository.description}
                    </span>
                  ) : null}
                  <span className="social-visual-repo-meta">
                    {language ? (
                      <span className="social-visual-lang">
                        <i
                          style={{ backgroundColor: language.color }}
                          aria-hidden="true"
                        />
                        {language.name}
                      </span>
                    ) : null}
                    {repository.stargazerCount > 0 ? (
                      <span className="social-visual-stars">
                        <StarIcon />
                        {repository.stargazerCount}
                      </span>
                    ) : null}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="social-visual-repo social-visual-repo-fallback">
          <p>Repositorios Universitarios</p>
          <span>Mis últimos proyectos de la UTA</span>
        </div>
      )}
    </div>
  </div>
);

const LinkedInVisual = () => (
  <div className="social-visual social-visual-linkedin">
    <div className="social-visual-window">
      <div className="social-visual-profile">
        <Image src={profilePicture} alt="" width={56} height={56} />
        <div>
          <p>Alisson Paredes</p>
          <span>Estudiante de Ingeniería de Software · Ambato</span>
        </div>
      </div>
      <div className="social-visual-pills">
        <span>Backend</span>
        <span>Java</span>
        <span>C++</span>
      </div>
      <div className="social-visual-repo">
        <p>Proyectos, competencias y desarrollo</p>
        <span>Desarrollo · Algoritmos · Redes</span>
      </div>
    </div>
  </div>
);

const profiles: SocialProfile[] = [
  {
    id: 'github',
    featured: true,
    name: 'GitHub',
    category: 'Código & Proyectos',
    href: `https://github.com/bethrmz13`,
    copy: "Aquí alojo el código fuente de mis proyectos universitarios, microservicios y prácticas de arquitectura de software. Explora mis últimos repositorios y tecnologías backend.",
    accent: '#2f2f3a',
    icon: <GitHubIcon />,
  },
  {
    id: 'linkedin',
    featured: true,
    name: 'LinkedIn',
    category: 'Red Profesional',
    href: '#', // Coloca aquí el link a tu LinkedIn cuando lo tengas
    copy: "Mi red profesional para la ingeniería de software. Aquí comparto mi progreso académico en la UTA, desarrollo de proyectos y participación en competencias de programación.",
    accent: '#0a66c2',
    icon: <LinkedInIcon />,
    visual: <LinkedInVisual />,
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    category: 'Programación Competitiva',
    href: '#', // Cambia por tu perfil real de Codeforces o el del equipo Kernel Panic
    copy: 'Plataforma donde practico estructuras de datos y algoritmos avanzados participando en torneos bajo el nombre de equipo Kernel Panic.',
    accent: '#1f8b4c',
    icon: <CodeforcesIcon />,
  },
];

function CardCopy({ profile }: { profile: SocialProfile }) {
  return <p className="social-card-copy">{profile.copy}</p>;
}

function CardHeader({ profile }: { profile: SocialProfile }) {
  return (
    <div className="social-card-top">
      <div className="social-card-identity">
        <span
          className="social-card-icon"
          style={{ background: profile.accent }}
        >
          {profile.icon}
        </span>
        <div>
          <h2>{profile.name}</h2>
          <p className="social-card-category">{profile.category}</p>
        </div>
      </div>
      <ExternalIcon />
    </div>
  );
}

export const SocialMediaCarousel = ({
  pinnedRepositories,
}: SocialMediaCarouselProps) => {
  return (
    <div className="social-grid">
      {profiles.map((profile) => {
        if (profile.id === 'github') {
          return (
            <article
              key={profile.id}
              className="social-card social-card-featured social-card-github"
            >
              <a
                className="social-card-profile-link"
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name}, ${profile.category}`}
              >
                <CardHeader profile={profile} />
              </a>
              <CardCopy profile={profile} />
              <GitHubVisual repositories={pinnedRepositories} />
            </article>
          );
        }

        return (
          <a
            key={profile.id}
            className={
              profile.featured
                ? 'social-card social-card-featured'
                : 'social-card'
            }
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${profile.name}, ${profile.category}`}
          >
            <CardHeader profile={profile} />
            <CardCopy profile={profile} />
            {profile.visual}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaCarousel;