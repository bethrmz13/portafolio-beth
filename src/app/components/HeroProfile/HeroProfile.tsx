'use client';

import Typewriter from 'typewriter-effect';
import { HeroSceneControls } from '../Hero/controls/HeroSceneControls';
import './HeroProfile.css';

const typewriterPhrases = [
  'Estudiante de Software (UTA)',
  'Desarrolladora Backend',
  'Programadora Competitiva',
  'Java & C++ Developer',
];

export const HeroProfile = () => {
  return (
    <div className="hero-profile-container">
      <div className="hero-profile">
        <p className="hero-profile-intro">¡Hola, soy Ali!</p>
        <h1>Ingeniería de Software</h1>
        <div className="hero-profile-typewriter" aria-hidden="true">
          <Typewriter
            options={{
              strings: typewriterPhrases,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="hero-profile-tagline">
          Me apasiona resolver problemas mediante código estructurado, desarrollar soluciones backend eficientes y competir en algoritmos con el equipo Kernel Panic.
        </p>
        <div className="hero-profile-actions">
          <a
            className="hero-cta hero-cta-primary"
            href="https://github.com/bethrmz13"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mis proyectos →
          </a>
          <a className="hero-cta hero-cta-secondary" href="/#contact">
            Contáctame
          </a>
        </div>
        <HeroSceneControls />
      </div>
    </div>
  );
};

export default HeroProfile;