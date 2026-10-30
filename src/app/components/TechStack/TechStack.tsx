import type { ReactNode } from 'react';
import './TechStack.css';

type TechItem = {
  name: string;
  icon: string;
};

type TechCategory = {
  title: string;
  description: string;
  technologies: TechItem[];
};

const coreStack: TechItem[] = [
  { name: 'Java', icon: 'java' },
  { name: 'C++', icon: 'cpp' },
  { name: 'Python', icon: 'python' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'SQL', icon: 'sql' },
];

const techCategories: TechCategory[] = [
  {
    title: 'Desarrollo Backend',
    description:
      'Lógica estructurada, microservicios, algoritmos y programación orientada a objetos.',
    technologies: [
      { name: 'Java', icon: 'java' },
      { name: 'C++', icon: 'cpp' },
      { name: 'Python', icon: 'python' },
      { name: 'C# .NET', icon: 'csharp' },
    ],
  },
  {
    title: 'Bases de Datos & Data',
    description:
      'Diseño, administración y despliegue de bases de datos relacionales y servicios.',
    technologies: [
      { name: 'SQL Server', icon: 'sql' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    title: 'Entornos & Herramientas',
    description: 'IDEs, control de versiones y plataformas para escribir y compilar código.',
    technologies: [
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Eclipse', icon: 'eclipse' },
      { name: 'NetBeans', icon: 'netbeans' },
      { name: 'Git', icon: 'git' },
      { name: 'Insomnia', icon: 'insomnia' },
    ],
  },
  {
    title: 'Infraestructura & Redes',
    description:
      'Diseño de topologías, simulaciones de red y despliegue de servidores.',
    technologies: [
      { name: 'Packet Tracer', icon: 'network' },
      { name: 'Wireshark', icon: 'network' },
      { name: 'OpenMediaVault', icon: 'server' },
      { name: 'LaTeX (Overleaf)', icon: 'latex' },
    ],
  },
];

const alsoWorkWith: TechItem[] = [
  { name: 'HTML & CSS', icon: 'html' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Vite', icon: 'vite' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'GitHub Actions', icon: 'github' },
];

const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, ReactNode> = {
    java: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.4 15.6c-.3-1-1.3-1.6-2.5-1.7-.1 0-.1 0-.2 0-.2 0-.5.1-.8.2-.1.1-.3.2-.4.4-.2.4-.2.8 0 1.2.2.4.6.7 1.1.8.8.2 1.9-.1 2.8-.9ZM15 11c-.3-1-1.3-1.6-2.5-1.7-.1 0-.1 0-.2 0-.2 0-.5.1-.8.2-.1.1-.3.2-.4.4-.2.4-.2.8 0 1.2.2.4.6.7 1.1.8.8.2 1.9-.1 2.8-.9ZM16 7c0-2.8-2.2-5-5-5S6 4.2 6 7s2.2 5 5 5 5-2.2 5-5ZM11 20.9c2.9 0 6.6-1.5 6.6-3.4 0-1.4-2.1-2.6-4.9-3.1 1.7.9 2.5 2.1 2.5 2.7 0 1.2-3 2.1-5.7 2.1-2.9 0-4.5-.9-4.5-2 0-.7.9-1.8 2.7-2.7-2.6.4-4.8 1.6-4.8 3 0 1.9 4 3.4 8.1 3.4Z" />
      </svg>
    ),
    cpp: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 11.2V9.8h-1.4V8.4h-1.4v1.4H16.8v1.4h1.4v1.4h1.4v-1.4H21Zm-6.3 0V9.8h-1.4V8.4h-1.4v1.4h-1.4v1.4h1.4v1.4h1.4v-1.4h1.4Zm-5.3 1.8c-1.3.8-2.9 1.2-4.6 1.2-4.5 0-8.2-3.7-8.2-8.2 0-4.5 3.7-8.2 8.2-8.2 1.7 0 3.3.4 4.6 1.2v3c-1.2-1.3-2.8-2.1-4.6-2.1-3.4 0-6.1 2.7-6.1 6.1 0 3.4 2.7 6.1 6.1 6.1 1.8 0 3.4-.8 4.6-2.1v3Z" />
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.5 2 6 4.4 6 4.4v2.7h6v.7H5.2S3 7.6 3 12s2.2 4.2 2.2 4.2h1.5v-2.1s0-2.6 2.6-2.6h2.7s2.5 0 2.5-2.5V4.6S14.5 2 12 2Zm-1.8 1.4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7ZM12 22c5.5 0 6-2.4 6-2.4v-2.7h-6v-.7h6.8s2.2.2 2.2-4.2-2.2-4.2-2.2-4.2h-1.5v2.1s0 2.6-2.6 2.6h-2.7s-2.5 0-2.5 2.5v4.4s0 2.6 2.5 2.6h2.5Zm1.8-1.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7Z" />
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M2.7 2h18.6v18.6H2.7V2Zm10.1 15.3c-.6-.4-1-.9-1-1.6H10c0 1.2.7 2 1.8 2.5 1 .4 2.3.4 3.3-.2.8-.5 1.2-1.3 1.2-2.2 0-2.6-4.1-2.2-4.1-3.9 0-.5.4-.9 1.1-.9.7 0 1.2.4 1.4.9h1.7c-.1-1.1-.8-1.9-2-2.3-.9-.3-2-.3-2.9.2-.8.5-1.1 1.2-1.1 2.1 0 2.6 4.1 2.2 4.1 3.9 0 .6-.5 1.1-1.2 1.1-.7 0-1.4-.4-1.6-1.1ZM7.6 17.5V7.4H5.7v9.4c0 1.9 1 2.9 2.9 2.9 1.1 0 1.9-.3 2.5-.8v-1.6c-.5.4-1.1.7-1.8.7-.9 0-1.7-.5-1.7-1.5Z" />
      </svg>
    ),
    sql: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="6.5" rx="7" ry="2.8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5 6.5v8c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5 10.5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
    supabase: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.3 10.4A1.6 1.6 0 0 0 20 9.8L12.5.3c-.5-.6-1.4-.7-2-.2-.2.2-.4.4-.5.7l-1 5.9H3.7c-.7 0-1.3.5-1.4 1.2 0 .4.2.8.5 1l9 11.2c.4.6 1.4.6 2 .2.2-.2.4-.4.5-.6l1-5.9h5.4c.7 0 1.3-.5 1.4-1.2 0-.4-.2-.8-.5-1.1h-.3Z" />
      </svg>
    ),
    vscode: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="m18 1.4 4.5 1.9v17.4L18 22.6 12 18l-5.7 4.2-4.8-2v-3.7l6.8-5L1.5 6.5v-3.7L6.3 1 12 5.2 18 1.4ZM18 4.2l-3.3 2.5 3.3 2.5V4.2ZM5.2 17.5l3.2-2.3L5.2 13v4.5ZM17.1 21l3.6-1.5V4.5L17.1 3 13.8 5.6 20.3 11 13.8 16.4 17.1 21ZM10 11.5 5.5 8l-2 1.5L9.6 15 10 11.5ZM14 12.5l5 3.7-2 1.4-5-3.8 2-1.3Z" />
      </svg>
    ),
    network: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 12h18M12 3c-2.8 0-5 4-5 9s2.2 9 5 9 5-4 5-9-2.2-9-5-9z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
    server: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 12h18M7 8h1M7 16h1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    latex: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 4h3.5v12.2h5V19H4V4zm9.5 0h3l4.5 15h-3.2l-.9-3.2h-4.3l-.8 3.2h-3L13.5 4zm1.1 9.4h2.7l-1.4-5.2-1.3 5.2z" />
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.5 10.5 13.5.5c-.7-.7-1.8-.7-2.5 0L1.5 10.5c-.7.7-.7 1.8 0 2.5l10 10c.7.7 1.8.7 2.5 0l9.5-9.5c.7-.7.7-1.8 0-2.5Zm-8.4 1.2c-.6.6-1.5.6-2.1.2l-2.4 2.4v3.1c.9.2 1.6 1.1 1.6 2.1 0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2c0-1 .7-1.9 1.6-2.1v-3.8c-.9-.2-1.6-1.1-1.6-2.1 0-.9.6-1.6 1.4-2l-2-2c-.5.2-1.1.2-1.6-.2-1-1-1-2.6 0-3.6s2.6-1 3.6 0c.9.9.9 2.2.2 3.1l2 2c.6-.4 1.4-.4 2 .1.9.9.9 2.2.1 3.1ZM9.9 4.9c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1Zm0 13c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1Zm5.2-7.2c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1Z" />
      </svg>
    ),
  };
  return icons[name.toLowerCase()] ?? (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
};

const CoreTechBadge = ({ item }: { item: TechItem }) => (
  <li>
    <span className="tech-core-badge">
      <span className={`tech-icon tech-icon-${item.icon}`} aria-hidden="true">
        <TechIcon name={item.icon} />
      </span>
      {item.name}
    </span>
  </li>
);

const TechBadge = ({ item }: { item: TechItem }) => (
  <li>
    <span className="tech-badge">
      <span className={`tech-icon tech-icon-${item.icon}`} aria-hidden="true">
        <TechIcon name={item.icon} />
      </span>
      {item.name}
    </span>
  </li>
);

const TechCategoryCard = ({ category }: { category: TechCategory }) => (
  <article className="tech-category-card">
    <h3>{category.title}</h3>
    <p className="tech-category-copy">{category.description}</p>
    <ul className="tech-badge-list">
      {category.technologies.map((item) => (
        <TechBadge item={item} key={item.name} />
      ))}
    </ul>
  </article>
);

export const TechStack = () => {
  return (
    <div className="tech-stack">
      <p className="tech-stack-lede">
        Tecnologías, lenguajes y herramientas que utilizo para resolver problemas y desarrollar sistemas de software.
      </p>

      <section className="tech-core" aria-labelledby="core-stack-heading">
        <h3 id="core-stack-heading">Lenguajes Core</h3>
        <ul className="tech-core-list">
          {coreStack.map((item) => (
            <CoreTechBadge item={item} key={item.name} />
          ))}
        </ul>
      </section>

      <div className="tech-category-grid">
        {techCategories.map((category) => (
          <TechCategoryCard category={category} key={category.title} />
        ))}
      </div>

      <section className="tech-secondary" aria-labelledby="also-work-heading">
        <h3 id="also-work-heading">También manejo</h3>
        <ul className="tech-secondary-list">
          {alsoWorkWith.map((item) => (
            <li key={item.name}>
              <span className="tech-secondary-pill">{item.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TechStack;