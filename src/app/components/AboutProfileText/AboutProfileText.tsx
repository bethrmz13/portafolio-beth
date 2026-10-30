'use client';

import Image from 'next/image';
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import profilePicture from '../../img/profile-picture.png';
import './AboutProfileText.css';

type AboutCard = {
  id: string;
  label: string;
  accent: string;
  headline: string;
  description?: string;
  points: string[];
  icon: ReactNode;
  visual: ReactNode;
};

const CheckIcon = () => (
  <svg
    className="about-card-check"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.14" />
    <path
      d="M5.8 10.2 8.4 12.8 14.2 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M5.5 18.5c1.2-2.8 3.5-4.2 6.5-4.2s5.3 1.4 6.5 4.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ToolingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M8 10.5 10.5 13 8 15.5M13 15.5h3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExperienceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M8 9V7.5A2.5 2.5 0 0 1 10.5 5h3A2.5 2.5 0 0 1 16 7.5V9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <rect x="4.5" y="9" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4.5 13.5h15" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="m14.8 9.2-1.4 4.2-4.2 1.4 1.4-4.2 4.2-1.4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const LoopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 8.5A5.5 5.5 0 0 1 17.5 10M17 15.5A5.5 5.5 0 0 1 6.5 14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M16 6.5 17.5 10 14 11M8 17.5 6.5 14 10 13"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileVisual = () => (
  <div className="about-visual about-visual-profile">
    <div className="about-visual-window">
      <div className="about-visual-chrome">
        <span />
        <span />
        <span />
      </div>
      <div className="about-visual-profile-body">
        <Image
          src={profilePicture}
          alt="Ali Paredes"
          width={72}
          height={72}
        />
        <div>
          <p className="about-visual-name">Ali Paredes</p>
          <p className="about-visual-role">Estudiante de Ingeniería de Software</p>
          <div className="about-visual-tags">
            <span>Java</span>
            <span>C++</span>
            <span>SQL</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ToolingVisual = () => (
  <div className="about-visual about-visual-tooling">
    <div className="about-visual-window">
      <div className="about-visual-chrome">
        <span />
        <span />
        <span />
        <p>terminal</p>
      </div>
      <pre>
        <span className="about-visual-prompt">~/dev</span>
        <span className="about-visual-cmd"> code .</span>
        {'\n'}
        <span className="about-visual-comment">
          # lenguajes principales
        </span>
        {'\n'}
        <span className="about-visual-prompt">→</span>
        <span className="about-visual-cmd"> java · cpp · python</span>
      </pre>
    </div>
    <div className="about-visual-pills">
      <span>VS Code</span>
      <span>Eclipse</span>
      <span>Insomnia</span>
    </div>
  </div>
);

const ExperienceVisual = () => (
  <div className="about-visual about-visual-experience">
    <div className="about-visual-window about-visual-chart">
      <p>Progreso Académico</p>
      <div className="about-visual-bars" aria-hidden="true">
        <div>
          <span style={{ height: '42%' }} />
          <span style={{ height: '28%' }} />
          <span style={{ height: '18%' }} />
        </div>
        <div>
          <span style={{ height: '50%' }} />
          <span style={{ height: '22%' }} />
          <span style={{ height: '16%' }} />
        </div>
        <div>
          <span style={{ height: '58%' }} />
          <span style={{ height: '20%' }} />
          <span style={{ height: '12%' }} />
        </div>
        <div>
          <span style={{ height: '68%' }} />
          <span style={{ height: '18%' }} />
          <span style={{ height: '10%' }} />
        </div>
        <div>
          <span style={{ height: '78%' }} />
          <span style={{ height: '14%' }} />
          <span style={{ height: '8%' }} />
        </div>
      </div>
      <div className="about-visual-legend">
        <span>Backend</span>
        <span>Redes</span>
        <span>Algoritmos</span>
      </div>
    </div>
  </div>
);

const OpenToVisual = () => (
  <div className="about-visual about-visual-open">
    <div className="about-visual-job">
      <p>Backend Developer</p>
      <span>Ambato · Remoto</span>
    </div>
    <div className="about-visual-job about-visual-job-offset">
      <p>Programación Competitiva</p>
      <span>CIEU · Kernel Panic</span>
    </div>
  </div>
);

const ProcessVisual = () => (
  <div className="about-visual about-visual-process">
    <div className="about-visual-steps">
      <div>
        <span>01</span>
        <p>Diseño</p>
      </div>
      <div>
        <span>02</span>
        <p>Código</p>
      </div>
      <div>
        <span>03</span>
        <p>Pruebas</p>
      </div>
    </div>
    <p className="about-visual-process-note">Optimización constante de algoritmos</p>
  </div>
);

const cards: AboutCard[] = [
  {
    id: 'profile',
    label: 'Perfil',
    accent: '#7148FC',
    headline: 'Desarrollo backend estructurado',
    description:
      'Estudiante de Ingeniería de Software en la UTA, enfocada en lenguajes como Java, C++, Python y JS.',
    points: [
      'Arquitectura de bases de datos y desarrollo de microservicios',
      'Enfoque en código eficiente y lógica estructurada',
      'Resolución de problemas y algoritmos con el equipo Kernel Panic',
    ],
    icon: <ProfileIcon />,
    visual: <ProfileVisual />,
  },
  {
    id: 'tooling',
    label: 'Herramientas',
    accent: '#0e8aa8',
    headline: 'El entorno adecuado',
    description:
      'IDEs, simuladores y clientes de API elegidos según la necesidad de cada proyecto académico o personal.',
    points: [
      'VS Code, Eclipse y NetBeans para escribir y depurar código',
      'Cisco Packet Tracer y Wireshark para diseño y análisis de redes',
      'Insomnia para pruebas de APIs y consumo de servicios',
    ],
    icon: <ToolingIcon />,
    visual: <ToolingVisual />,
  },
  {
    id: 'experience',
    label: 'Experiencia',
    accent: '#0c9b56',
    headline: 'Proyectos y Competencias',
    points: [
      'MoviPass: Sistema de transporte con autenticación en Supabase',
      'Microservicios API con C# .NET ASP.NET Core y SQL Server',
      'Configuración de servidores NAS y clonación de imágenes de sistema',
      'Participación activa en programación competitiva',
    ],
    icon: <ExperienceIcon />,
    visual: <ExperienceVisual />,
  },
  {
    id: 'open-to',
    label: 'Intereses',
    accent: '#c99200',
    headline: 'Backend, Redes y Algoritmia',
    description: 'Enfocada en aprender y aplicar soluciones reales en mi carrera universitaria.',
    points: [
      'Desarrollo e integración de APIs',
      'Administración de bases de datos relacionales',
      'Competencias de programación (RPC, Codeforces, omegaUp)',
    ],
    icon: <CompassIcon />,
    visual: <OpenToVisual />,
  },
  {
    id: 'process',
    label: 'Cómo trabajo',
    accent: '#ef2f4c',
    headline: 'Lógica. Desarrollo. Pruebas.',
    description:
      'Me enfoco en comprender el problema a fondo antes de escribir la primera línea de código.',
    points: [
      'Análisis detallado de requerimientos y estructuración',
      'Implementación con código limpio y eficiente',
      'Uso estratégico de IA como apoyo, manteniendo el juicio crítico',
    ],
    icon: <LoopIcon />,
    visual: <ProcessVisual />,
  },
];

export const AboutProfileText = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 8);
    setCanScrollRight(track.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>('.about-card');
    const styles = card ? window.getComputedStyle(track) : null;
    const gap = styles ? parseFloat(styles.columnGap || styles.gap) || 24 : 24;
    const amount = (card?.offsetWidth ?? 392) + gap;

    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="about-cards">
      <div className="about-cards-toolbar">
        <p className="about-cards-kicker">Sobre mí</p>
        <div className="about-cards-nav">
          <button
            type="button"
            className="about-cards-arrow"
            aria-label="Anterior"
            disabled={!canScrollLeft}
            onClick={() => scrollByCard('left')}
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 3 5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="about-cards-arrow"
            aria-label="Siguiente"
            disabled={!canScrollRight}
            onClick={() => scrollByCard('right')}
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="m6 3 5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="about-cards-track"
        ref={trackRef}
        role="region"
        aria-label="Acerca de Ali"
      >
        {cards.map((card) => (
          <article className="about-card" key={card.id}>
            <div className="about-card-visual" data-visual={card.id}>
              {card.visual}
            </div>
            <div className="about-card-body">
              <div className="about-card-label">
                <span
                  className="about-card-icon"
                  style={{ background: card.accent }}
                >
                  {card.icon}
                </span>
                {card.label}
              </div>
              <h2>{card.headline}</h2>
              {card.description ? <p>{card.description}</p> : null}
              <ul>
                {card.points.map((point) => (
                  <li key={point}>
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AboutProfileText;