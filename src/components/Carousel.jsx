
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import '../styles/carousel.css';
import banner3 from '../assets/banners/Banner3.png';
import banner1 from '../assets/banners/Banner1.png';
import banner4 from '../assets/banners/Banner4.png';
import banner2 from '../assets/banners/Banner2.png';
import  WhatsAppButton  from './WhatsAppButton';
import canon from '../assets/logos/canon.svg';
import angelbird from '../assets/logos/angelbird.svg';
import datavideo from '../assets/logos/datavideo.svg';
import fora from '../assets/logos/fora.svg';
import fujifilm from '../assets/logos/fujifilm.svg';
import hollyland from '../assets/logos/hollyland.svg';
import jvc from '../assets/logos/jvc.svg';
import panasonic from '../assets/logos/panasonic.svg';
import roland from '../assets/logos/roland.svg';
import sony from '../assets/logos/sony.svg';
import sure from '../assets/logos/sure.svg';
import teradek from '../assets/logos/teradek.svg';
import aceail from '../assets/logos/aceail.png';


const MyCarousel = () => {

  return (
    <>
    <Carousel
      showStatus={false} // Oculta los indicadores de estado (opcional)
      showThumbs={false} // Oculta las miniaturas (opcional)
      infiniteLoop={true} // Activa el bucle infinito (opcional)
      autoPlay={true} // Activa la reproducción automática (opcional)
    >
    <div className='featured' >
        <img src={banner1} alt="Banner1" />
        <div className="vcenter">
          <div className="text-reverse">
            <div className="container-fluid">
              <h2>Bienvenido a <br/> EJM Broadcast</h2>
              <p>Un equipo de profesionales audiovisuales <br/>  que provee soluciones, asesoria y buenos<br/>precios para el mundo del Broadcast</p>
              <button type='button' className='btn'>Conéctate con nosotros</button>
            </div>
          </div>
        </div>        
      </div>
      <div className='featured' >
        <img src={banner2} alt="Banner2" />
        <div className="vcenter">
          <div className="text-reverse">
            <div className="container-fluid">
              <p>Ofrecemos la última tecnología <br/> respaldada por nuestra</p>
              <h2>visión creativa <br/> y experiencia</h2>
              <button type='button' className='btn'>Conéctate con nosotros</button>
            </div>
          </div>
        </div>
      </div>
      <div className='featured' >
        <img src={banner3} alt="Banner3" />
        <div className="vcenter">
          <div className="text-reverse">
            <div className="container-fluid">
              <p >Integramos los sistemas de audio, video <br/> e iluminación para crear espacios <br/>atractivos que intensifiquen</p>
              <h2>la experiencia de <br/> su audiencia</h2>
              <button type='button' className='btn'>Conéctate con nosotros</button>
            </div>
          </div>
        </div>
      </div>
      <div className='featured' >
        <img src={banner4} alt="Banner4" />
        <div className="vcenter">
          <div className="text">
            <div className="container-fluid">
              <p style={{ fontSize: '30px', color: '#fff', textAlign:'start' }}>Algunas de</p>
              <h2 style={{ color: '#e98f2d' }}>Nuestras Marcas</h2>
              <ul className="logos logos3">
                <li><img src={panasonic} alt="panasonic"/></li>
                <li><img src={sony} alt="sony"/></li>
                <li><img src={canon} alt="canon"/></li>
                <li><img src={angelbird} alt="angelbird"/></li>
                <li><img src={datavideo} alt="eartec"/></li>
                <li><img src={fora} alt="magewell"/></li>
                <li><img src={fujifilm} alt="magix"/></li>
                <li><img src={hollyland} alt="optics"/></li>
                <li><img src={jvc} alt="red"/></li>
                <li><img src={roland} alt="roland"/></li>
                <li><img src={sure} alt="sure"/></li>
                <li><img src={teradek} alt="teradek"/></li>
                <li><img src={aceail} alt="aceail"/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    <WhatsAppButton></WhatsAppButton>
    </>

  );

};

export default MyCarousel;
