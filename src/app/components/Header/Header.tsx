import Logo from '../../img/logo.svg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';
import Image from 'next/image';

interface Headerprops {
  homeRef: any;
  aboutRef: any;
  scoialMediaRef: any;
  skillsRef: any;
  contactRef: any;
}

export const Header = ({
  aboutRef,
  scoialMediaRef,
  skillsRef,
  contactRef,
  homeRef,
  ...props
}: Headerprops) => {
  const handleScroll = (ref: any): void => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="header-desktop">
        <section>
          <div>
            <a
              href="#home"
              aria-label="Inicio"
              rel="noopener noreferrer"
              onClick={() => {
                handleScroll(homeRef.current);
              }}
            >
              <Image
                src={Logo}
                alt="Ali Paredes Logo"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className="navigation">
            <nav aria-label="Primary">
              <a
                href="#home"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(homeRef.current);
                }}
              >
                Inicio
              </a>
              <a
                href="#about"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(aboutRef.current);
                }}
              >
                Sobre mí
              </a>
              <a
                href="#socialmedia"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(scoialMediaRef.current);
                }}
              >
                Proyectos
              </a>
              <a
                href="#skills"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(skillsRef.current);
                }}
              >
                Stack
              </a>
              <a
                href="#contact"
                rel="noopener noreferrer"
                onClick={() => {
                  handleScroll(contactRef.current);
                }}
              >
                Contacto
              </a>
            </nav>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </section>
      </div>
      <div className="header-mobile-no-menu">
        <div className="logo-theme-toggle">
          <a
            href="#home"
            aria-label="Inicio"
            rel="noopener noreferrer"
            onClick={() => {
              handleScroll(homeRef.current);
            }}
          >
            <Image
              src={Logo}
              alt="Ali Paredes Logo"
              width={50}
              height={50}
            />
          </a>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      {/* El menú móvil comentado se ocultó por limpieza, ya que el original también lo tenía desactivado */}
    </>
  );
};

export default Header;