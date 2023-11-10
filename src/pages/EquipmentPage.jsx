import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { equipmentData } from '../components/equipmentData';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import style from '../styles/EquipmentPage.module.css';

 const EquipmentPage = () => {
    const { type } = useParams();
    const equipment = equipmentData[type];
    // console.log(equipment);
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
            <div className={style.container}>
            <div className={style.text}>
                <p>{equipment.text}</p>
            </div>
            <div className={style.brandsgrid}>
                {equipment.brands.map((brand, index) => ( 
                    <div key={index} className={style.brandContainer}>
                        <img className={style.brandImage} src={brand.image} alt={brand.name} />
                        <img className={style.minicon} src={brand.minicon} alt="minivideo" />
                        {/* <p>{brand.name}</p> */}
                    </div>
                )
                )}

            </div>   
            </div>
        </div>
        <Footer></Footer>
        <WhatsAppButton/>

    </>

  )
}

export default EquipmentPage