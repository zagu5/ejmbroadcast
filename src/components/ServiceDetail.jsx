import PropTypes from 'prop-types';
import Header from "./Header"
import Footer from "./Footer"
import WhatsAppButton from "./WhatsAppButton"
import style from "../styles/serviceDetail.module.css"
import React from 'react';

export const ServiceDetail = ({serviceData}) => {
  const TextWithBreaks = ({text}) => {
    return text.split('\n').map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br/>
      </React.Fragment>
    ));
  }
  return (
    <>
        <Header/>
        <div className={style.content}> 
        <h2 className={style.title}>{serviceData.title}</h2>
        <img src={serviceData.image} alt="" />
        </div>
        <div className={style.infoContainer}>
        {serviceData.information.map((info, index) => (
          <div key={index} className={style.textContainer}>
            <img src={info.image} alt="" />
            <div className={style.textSection}>
              <h3 className={style.infoTitle}><TextWithBreaks text={info.title} /></h3>
              <h4 className={style.infoSubtitle}><TextWithBreaks text={info.subtitle} /></h4>
              <p className={style.infoParagraph}>{info.paragraph}</p>
            </div>

          </div>
        ))}
        <button className={style.button}>Cotiza tu proyecto</button>
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
    information: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        paragraph: PropTypes.string,
        image: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default ServiceDetail;
