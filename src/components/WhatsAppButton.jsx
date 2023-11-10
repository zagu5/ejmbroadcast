import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/whatsapp.css'


const WhatsAppButton = () => {
  const phoneNumber = '123456789'; // Reemplazar numero de whatsapp a contactar

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
    <div className="whatsapp-button-container">
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25d366' }} />
        </button>
    </div>

    </>


  );
};

export default WhatsAppButton;
