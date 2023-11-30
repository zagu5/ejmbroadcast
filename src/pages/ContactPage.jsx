import { useEffect, useState, useRef } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../styles/ContactPage.module.css';
import WhatsAppButton from "../components/WhatsAppButton";

const initialFormData = {
  name: '',
  country: '',
  phoneNumber: '',
  usaWhatsapp: false,
  tipoAsesoria: '',
  email: '',
  nombreEmpresa: '',
  direccion: '',
  codigoPostal: '',
  pais: '',
  message: '',
  newsletter: false,
};

const ContactPage = () => {
  const phoneInput = useRef();
  const iti = useRef();

  useEffect(() => {
    iti.current = intlTelInput(phoneInput.current, {
      initialCountry: 'co',
      preferredCountries: ['co', 'us'],
      separateDialCode: true,
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });
  }, []);

  const [formData, setFormData] = useState(initialFormData);

  const validateForm = () => {
    let isValid = true;
    let errorMessage = "";
  
    // Validar campos requeridos
    if (!formData.name || !formData.email || !formData.message) {
      isValid = false;
      errorMessage += "Los campos nombre, email y mensaje son requeridos.\n";
    }
  
    // Validar formato de correo electrónico
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errorMessage += "El correo electrónico no es válido.\n";
    }
    
    // Validar número de teléfono
    if (!iti.current.isValidNumber()) {
      isValid = false;
      errorMessage += "El número de teléfono no es válido.\n";
    }
    
    return { isValid, errorMessage };
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const { isValid, errorMessage } = validateForm();
    if (isValid) {
      alert('Formulario enviado');
      setFormData(initialFormData);
    } else {
      alert(errorMessage);
    }
  };

  const formFields = [
    { label: 'Nombre*', type: 'text', name: 'name' },
    { label: 'Teléfono*', type: 'tel', name: 'phoneNumber' },
    { label: '¿Usas WhatsApp?', type: 'text', name: 'usaWhatsapp' },
    { label: '¿Tipo de Asesoría?', type: 'text', name: 'tipoAsesoria' },
    { label: 'Email*', type: 'email', name: 'email' },
    { label: 'Nombre de la Empresa*', type: 'text', name: 'nombreEmpresa', required: true },
    { label: 'Dirección*', type: 'text', name: 'direccion', required: true },
    { label: 'Código Postal*', type: 'text', name: 'codigoPostal', required: true },
    { label: 'País*', type: 'text', name: 'pais', required: true },
    { label: 'Mensaje*', type: 'textarea', name: 'message' },
  ];

  return (
    <>
      <Header />
      <main className={style.mainStyle}>
      <h1 className={style.h1}>
       <span className={style.color1}>Agenda una asesoria personalizada con nuestros expertos para darte una mejor <br/> respuesta a las necesidades de tu proyecto. </span> 
       <span className={style.color2}>Por favor llena el formulario que se encuentra <br/> a continuación:</span>
      </h1>
      <form className={style.formStyle} onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
      <div key={index} className={field.type === 'select' ? style.row : null}>
        <label htmlFor={field.name}>
          {field.label}
          {field.type === 'tel' ? (
            <input 
              ref={phoneInput} 
              type="tel" 
              id={field.name}
              name={field.name}
              autoComplete="tel"
            />
          ) : field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              autoComplete="on"
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              autoComplete="on"
            />
          )}
        </label>
      </div>
))}
        <button className= {style.button}type="submit">Enviar</button>
      </form>
    </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;

