import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from 'react';
import style from '../styles/ContactPage.module.css';
import axios from "axios";
import WhatsAppButton from "../components/WhatsAppButton";

const ContactPage = () => {
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

const [countries, setCountries] = useState([]);

useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
        .then((response) => {
            const countriesData = response.data;
            const countryCodes = countriesData.map(country => country.ccn3);
            console.log(countryCodes);
        })
        .catch((error) => {
            console.error('Error fetching country data:', error);
        });
}, []);

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
    { label: 'Pais*', type: 'select', name: 'country', options: countries },
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
              {field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccione un País</option>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option.code}>
                      {option.name}
                    </option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  required={field.required}
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
