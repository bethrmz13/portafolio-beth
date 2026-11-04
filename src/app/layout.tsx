import type { Metadata } from 'next';
import './globals.css';
import SupportWidget from './components/SupportWidget/SupportWidget';
import ThemeContextProvider from './context/ThemeContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://bethrmz13.github.io'),
  alternates: {
    canonical: '/portafolio-beth',
  },
  title: {
    default: 'Alisson Paredes | Ingeniería de Software',
    template: '%s | Alisson Paredes',
  },
  description:
    'Portafolio de Alisson Paredes, estudiante de Ingeniería de Software en la Universidad Técnica de Ambato (UTA). Proyectos en Java, C++, Python, SQL y desarrollo backend.',
  keywords: [
    'Alisson Paredes',
    'Ali Paredes',
    'Ingeniería de Software',
    'Software Engineer',
    'UTA',
    'Universidad Técnica de Ambato',
    'Backend',
    'Java',
    'C++',
    'Python',
    'SQL',
    'Kernel Panic',
    'Ecuador'
  ],
  authors: [
    {
      name: 'Alisson Paredes',
      url: 'https://bethrmz13.github.io/portafolio-beth',
    },
  ],
  creator: 'Alisson Paredes',
  publisher: 'Alisson Paredes',
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    url: 'https://bethrmz13.github.io/portafolio-beth',
    siteName: 'Portafolio de Alisson Paredes',
    title: 'Alisson Paredes | Ingeniería de Software',
    description:
      'Portafolio de Alisson Paredes, estudiante de Ingeniería de Software en la Universidad Técnica de Ambato (UTA).',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alisson Paredes | Ingeniería de Software',
    description:
      'Portafolio de Alisson Paredes, estudiante de Ingeniería de Software en la Universidad Técnica de Ambato (UTA).',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedTheme = localStorage.getItem('theme');
                document.documentElement.dataset.theme =
                  savedTheme === 'dark' ? 'dark' : 'light';
              } catch (_) {
                document.documentElement.dataset.theme = 'light';
              }
              try {
                var savedScene = localStorage.getItem('portfolio-hero-scene');
                var allowedScenes = {
                  london: 1,
                  mountain: 1,
                  beach: 1,
                  space: 1,
                };
                document.documentElement.dataset.heroScene =
                  savedScene && allowedScenes[savedScene]
                    ? savedScene
                    : 'london';
              } catch (_) {
                document.documentElement.dataset.heroScene = 'london';
              }
              try {
                var savedMotion = localStorage.getItem('portfolio-hero-motion');
                var reduceMotion = window.matchMedia(
                  '(prefers-reduced-motion: reduce)'
                ).matches;
                if (savedMotion === 'on' || savedMotion === 'off') {
                  document.documentElement.dataset.heroMotion = savedMotion;
                } else {
                  document.documentElement.dataset.heroMotion = reduceMotion
                    ? 'off'
                    : 'on';
                }
              } catch (_) {
                document.documentElement.dataset.heroMotion = 'on';
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeContextProvider>
          {children}
          <SupportWidget />
        </ThemeContextProvider>
      </body>
    </html>
  );
}