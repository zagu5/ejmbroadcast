import '../styles/whatsapp.css'
import whatsappIcon from '../assets/logos/whatsapp.png'

const WhatsAppButton = () => {
  const phoneNumber = '573118603977'; // Reemplazar numero de whatsapp a contactar

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
    <div className="whatsapp-button-container">
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
          <img src={whatsappIcon} alt="" />
        </button>
    </div>

    </>


  );
};

export default WhatsAppButton;
