import Header from '../components/Header'
import style from '../styles/AboutPage.module.css'
import banner from '../assets/images/about/Banner_1.png'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <>
        <Header/>
        <div className={style.container}> 
            <div className={style.textContainer}>
                <h2 className={style.title}>DETRÁS DE CADA PROYECTO</h2>
                <p className={style.myClass}>Está el esfuerzo equipo de expertos que trabajan para alcanzar la solución perfecta <br/> para cada cliente</p>
            </div>
            <div className={style.columnsContainer}>
                <div className={style.rightColumn}>
                    <h3 className={style.subtitle}>ASUMIENDO <br/> RETOS</h3>
                </div>
                <div className={style.leftColumn}>
                    <p className={style.text}>Nacimos en el corazón de la ciudad de entretenimiento más importante del mundo: Orlando; donde se explotan al máximo todos los recursos del vídeo, audio y proyección y se asumen  nuevos retos para seguir siendo reconocida como la ciudad donde todos los sueños se hacen realidad. </p>
                </div>
            </div>
            <img className={style.imagecontainer} src={banner} alt="banner" />
        </div>
        <Footer/>
    </>
  )
}

export default AboutPage