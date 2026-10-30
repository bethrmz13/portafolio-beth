'use client';

import CopyEmailButton from './CopyEmailButton';

export const ContactDetails = () => {
  return (
    <aside
      className="contact-details"
      aria-labelledby="contact-details-heading"
    >
      <p className="contact-details-kicker">Contacto</p>
      <h3 id="contact-details-heading">
        ¿Tienes algún proyecto o colaboración en mente?
      </h3>
      <p className="contact-details-copy">
        No dudes en enviarme un mensaje. Leo todas las consultas y suelo responder lo antes posible.
      </p>

      <div className="contact-details-block">
        <p className="contact-details-label">Correo electrónico</p>
        <div className="contact-details-email-row">
          <a href="mailto:tu-correo@ejemplo.com">alissonparedes83@gmail.com</a>
          <CopyEmailButton />
        </div>
      </div>

      <div className="contact-details-block">
        <p className="contact-details-label">Ubicación</p>
        <p className="contact-details-value">Ambato, Ecuador</p>
      </div>

      <p className="contact-availability">
        <span className="contact-availability-dot" aria-hidden="true" />
        Disponible para oportunidades
      </p>

      <div className="contact-details-links">
        <a
          href="https://github.com/bethrmz13"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </aside>
  );
};

export default ContactDetails;