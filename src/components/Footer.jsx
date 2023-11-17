import styles from '../styles/footer.module.css';
// Componente para la información de contacto
function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.contactColumn}>
        <h1 className={styles.formTitle}>Comencemos <br/> a trabajar</h1>
        <p className={styles.text1}>Línea de asesoría y ventas</p>
        <p>Colombia: +57 602 620 52 95</p>
        <p>USA: +1 561 290 9267</p>
        <p className={styles.text2}>Whatsapp: +57 311 860 39 77</p>
        <p>Correo electrónico:</p>
        <p><a href="mailto:info@ejmbroadcast.com">info@ejmbroadcast.com</a></p>
      </div>
    </div>
  );
}

// Componente para el formulario de contacto
function ContactForm() {
  return (
    <div className={styles.formSection}>
      <form>
        <div className={styles.formGroup}>
          <div className={styles.inlineInput}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
      <div className={styles.socialMedia}>
        <p>Envíanos un mensaje o síguenos por redes sociales</p>
        <div className={styles.footerIcons}>
          <a href="https://m.facebook.com/EjmBroadcast" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/ejm_broadcast/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://x.com/ejmbroadcast" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
}


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id={"contact"} className={styles.footer}>
      <ContactInfo />
      <ContactForm />
      <span className={styles.footerText}>© {currentYear} Todos los derechos reservados Elefante Pink</span>
    </footer>
  );
};

export default Footer;