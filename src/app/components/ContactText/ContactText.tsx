import './ContactText.css';

type ContactTextProps = {};

export const ContactText = ({ ...props }: ContactTextProps) => {
  return (
    <>
      <div className="contact-text">
        <p>
          Estoy abierta a hablar sobre nuevos proyectos o colaboraciones. Puedes escribirme a{' '}
          <a href="mailto:tu-correo@ejemplo.com">tu-correo@ejemplo.com</a>. ¡Espero tu mensaje!
        </p>
      </div>
    </>
  );
};

export default ContactText;