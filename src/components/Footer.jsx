import styles from '../styles/footer.module.css';
import { useForm } from "react-hook-form";

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
        <p><a style={{color:'#e98f2d'}} href="mailto:info@ejmbroadcast.com">info@ejmbroadcast.com </a></p>
      </div>
    </div>
  );
}

// Componente para el formulario de contacto
function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.inputRow} ${styles.inputContainer}`}>
          <div>
          <label>Nombre</label>
          <input
            {...register("nombre", { required: "El campo Nombre es requerido" })}
            type="text"
            placeholder=""
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
          </div>
          <div>
          <label>Email</label>
          <input
            {...register("email", { required: "El campo Email es requerido", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Email inválido" } })}
            type="email"
            placeholder=""
          />
           {errors.email && <p style={{color:'#e98f2d', fontSize: '16px'}}>{errors.email.message}</p>}
          </div>        
        </div>

        <label>Mensaje</label>
        <textarea
          {...register("mensaje", { required: "El campo Mensaje es requerido" })}
          placeholder=""
        />
        {errors.mensaje && <p >{errors.mensaje.message}</p>}
        <button type="submit">
          Enviar
        </button>
      </form>
      <div className={styles.socialMedia}>
        <p>Envíanos un mensaje o síguenos <br/> por redes sociales</p>
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
    <footer id={"footer"} className={styles.footer}>
      <ContactInfo />
      <ContactForm />
      <span className={styles.footerText}>© {currentYear} Todos los derechos reservados Elefante Pink</span>
    </footer>
  );
};

export default Footer;