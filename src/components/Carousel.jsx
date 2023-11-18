
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import '../styles/carousel.css';
import { Link } from 'react-router-dom';
import banner3 from '../assets/banners/Banner3.png';
import banner1 from '../assets/banners/Banner1.png';
import banner4 from '../assets/banners/Banner_Home_2.png';
import banner2 from '../assets/banners/Banner2.png';
import  WhatsAppButton  from './WhatsAppButton';


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
              <Link to='/contact-form'><button id="contact" type='button' className='btn'>Conéctate con nosotros</button></Link>
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
              <Link to='/contact-form'><button id="contact" type='button' className='btn'>Conéctate con nosotros</button></Link>
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
              <Link to='/contact-form'><button id="contact" type='button' className='btn'>Conéctate con nosotros</button></Link>
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
              <h2 style={{ color: '#e98f2d', marginBottom:'40px'}}>Nuestras Marcas</h2>
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
