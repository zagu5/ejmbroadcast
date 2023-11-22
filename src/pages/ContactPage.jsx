import { useEffect, useState, useRef } from 'react';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from '../styles/ContactPage.module.css';
import axios from "axios";
import WhatsAppButton from "../components/WhatsAppButton";

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

  const validatePhoneNumber = () => {
    if (iti.isValidNumber()) {
      console.log('Número de teléfono válido');
    } else {
      console.log('Número de teléfono no válido');
    }
  };

  const [formData, setFormData] = useState({
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
  });

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
  };

  const formFields = [
    { label: 'Nombre*', type: 'text', name: 'name' },
    { label: 'Teléfono*', type: 'tel', name: 'phoneNumber' },
    { label: '¿Usas WhatsApp?', type: 'checkbox', name: 'usaWhatsapp' },
    { label: 'Tipo de Asesoría', type: 'text', name: 'tipoAsesoria' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Nombre de la Empresa*', type: 'text', name: 'nombreEmpresa', required: true },
    { label: 'Dirección*', type: 'text', name: 'direccion', required: true },
    { label: 'Código Postal*', type: 'text', name: 'codigoPostal', required: true },
    { label: 'País*', type: 'text', name: 'pais', required: true },
    { label: 'Message', type: 'textarea', name: 'message' },
  ];

  return (
    <>
      <Header />
      <main className={style.mainStyle}>
      <h1 className={style.h1}>Agenda una asesoria personalizada con nuestros expertos para date una mejor <br/> respuesta a las necesidades de tu proyecto.</h1>
      <form className={style.formStyle} onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index} className={field.type === 'select' ? style.row : null}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === 'tel' ? (
              <input ref={phoneInput} type="tel" onBlur={validatePhoneNumber} />
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
              />
            )}
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;

