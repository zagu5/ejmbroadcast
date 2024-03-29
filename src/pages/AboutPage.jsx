import Header from '../components/Header'
import style from '../styles/AboutPage.module.css'
import banner from '../assets/images/about/Banner_Nosotros_1.png'
import iconhands from '../assets/images/about/iconhands.svg'
import iconcamera from '../assets/images/about/iconcamera.svg'
import iconok from '../assets/images/about/iconok.svg'
import banner2 from '../assets/images/about/Banner_2.png'
import foto1 from '../assets/images/about/foto_1.png'
import foto2 from '../assets/images/about/foto_2.png'
// import logosEmpresas from '../assets/images/about/logosEmpresas.png'
import Footer from '../components/Footer'
import WhatsAppButton from "../components/WhatsAppButton";

const AboutPage = () => {
  return (
    <>
        <Header/>
        <dir className={style.content}>
            <div className={style.container}> 
                <div className={style.textContainer}>
                    <h2 className={style.title}>DETRÁS DE CADA PROYECTO</h2>
                    <p className={style.myClass}>Está el esfuerzo de nuestro equipo de expertos que trabajan para alcanzar la solución perfecta <br/> para cada cliente.</p>
                </div>
                <div className={style.columnsContainer}>
                    <div className={style.rightColumn}>
                        <h3 className={style.subtitle}>ASUMIENDO RETOS</h3>
                    </div>
                    <div className={style.leftColumn}>
                        <p className={style.text}>Nacimos en el corazón de la ciudad de entretenimiento más importante del mundo: Orlando; donde se explotan al máximo todos los recursos del vídeo, audio y proyección y se asumen  nuevos retos para seguir siendo reconocida como la ciudad donde todos los sueños se hacen realidad. </p>
                    </div>
                </div>
                <img className={style.imagecontainer} src={banner} alt="banner" />
            </div> 
            <div className={style.newContainer}>
                <h2 className={style.newTitle}>LOS BENEFICIOS SON PARA NUESTROS CLIENTES: </h2>
                <div className={style.iconContainer}>
                    <img  className={style.icon} src={iconhands} alt="iconhands" />
                    <img className={style.icon} src={iconcamera} alt="iconcamera" />
                    <img className={style.icon}  src={iconok} alt="iconok" />
                </div>
                <div className={style.newParagraph}>
                <p className={style.paragraph}> Hemos revolucionado el concepto de venta estrechando nuestra relación y manteniendo el contacto con <br /> los fabricantes para que nuestros clientes además de comprar un producto, tengan acompañamiento, <br /> soporte y garantía en cada uno de los países en los que prestamos servicio. </p>
                <p className={style.paragraph}> <br/>Trabajamos enfocados en las necesidades del cliente y no lo que a nuestra empresa le conviene <br /> comercialmente, nuestros acuerdos de distribución están regidos por los mismos parámetros: <br /> “Es el cliente el que se debe llevar los beneficios”.</p>
                </div>
            </div>
            <div className={style.newContainer2}>
                <div className={style.textContainer2}>
                    <h2 className={style.title1}>CONOCIMIENTO Y EXPERIENCIA</h2>
                    <h2 className={style.subtitle1}>EN FRENTE DE <br />CADA PROYECTO</h2>
                    <p className={style.paragraph1}>Nuestro equipo de profesionales son especialistas preparados y <br /> dispuestos a ofrecer asesoría y capacitación en el uso de recursos para <br /> Media Broadcast; su experiencia la ha adquirido trabajando y <br />asesorando a grandes empresas de entretenimiento: Walt Disney, <br /> ABC, CNN, MIRATV, HOLA TV, RCN TV. </p>
                </div>
                <img  className= {style.image1}src={foto1} alt="foto1" />
                {/* <div className={style.logosEmpresas}>
                    <img src={logosEmpresas} alt="logos empresas" />
                </div> */}
            </div>
            <div className={style.containerBanner}>
                <p className={style.paragraph2}>Nuestro principal objetivo es que usted se sienta seguro con sus decisiones de compra, por eso nosotros le ayudaremos a crear soluciones a otro nivel. </p>
                <img src={banner2} alt="banner2"  className={style.imagecontainer}/>
            </div>
            <div className={style.newContainer3}>
                <img src={foto2} alt="foto camaras"  className={style.image2}/>
                <div className={style.textContainer3}>
                    <h2 className={style.subtitle2}>SIEMPRE A <br />LA VANGUARDIA <br /> DE LA TECNOLOGÍA</h2>
                    <p className={style.paragraph3}>Nos hemos vinculado a importantes procesos de capacitación, inspección y valoración de todos nuestros proveedores en soluciones de acústica, audio, iluminación, proyección y video profesional. Durante varios años hemos estado participando de las ferias más grandes del mundo de la iluminación, el audio y el video, extendiendo nuestro conocimiento al ritmo de la tecnología actual y la orientación hacia la que se dirige la industria. </p>
                </div>
                
            </div>
        </dir>

        <Footer/>
        <WhatsAppButton/>
    </>
  )
}

export default AboutPage