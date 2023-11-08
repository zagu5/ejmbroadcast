import PropTypes from 'prop-types';
import Header from "./Header"
import Footer from "./Footer"
import WhatsAppButton from "./WhatsAppButton"
import style from "../styles/serviceDetail.module.css"

export const ServiceDetail = ({serviceData}) => {
  return (
    <>
        <Header/>
        <div className={style.content}> 
        <h2 className={style.title}>{serviceData.title}</h2>
        <img src={serviceData.image} alt="" />
        </div>

        <Footer/>
        <WhatsAppButton/>
    </>
  )
}

ServiceDetail.propTypes = {
  serviceData: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default ServiceDetail;
