import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { equipmentData } from '../components/equipmentData';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import style from '../styles/EquipmentPage.module.css';
import { Card } from 'react-bootstrap';
import { useScrollToTop } from '../components/useScrollToTop';

 const EquipmentPage = () => {
    useScrollToTop();
    const { type } = useParams();
    const equipment = equipmentData[type];
  return (
    <> 
        <Header/>
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src={equipment.image} alt={equipment.title} />
                <div className={style.titleIcon}>
                    <h1>{equipment.title}</h1>
                    <img src={equipment.icon} alt="" />
                </div>
            </div>
            <div className={style.container2}>
                <div className={style.text}>
                    <p>{equipment.text}</p>
                </div>
                <div className={style.brandsgrid}>
                {equipment.brands.map((brand, index) => (
                    <Card key={index} style={{ width: '8rem' }}>
                        <Card.Body className='card-body' > 
                            <Card.Img className="main-image" src={brand.image} alt="image" />
                        </Card.Body>
                    </Card>
                ))}
                </div>
            </div>
        </div>
        <Footer></Footer>
        <WhatsAppButton/>

    </>

  )
}

export default EquipmentPage