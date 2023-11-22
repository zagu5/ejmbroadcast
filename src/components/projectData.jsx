/*ProjectData.jsx*/
import cfc from '../assets/images/projects/Header_cfc.png';
import elp from '../assets/images/projects/Header_elp.png';
import mci from '../assets/images/projects/Header_mci.png';
import ccav from '../assets/images/projects/Header_ccav.png';
import revistasemana from '../assets/images/projects/Header_revistasemana.png';
import noventaminutos from '../assets/images/projects/Header_90minutos.png';
import cfcsmall1 from '../assets/images/projects/slider/CentroFamiliarCristiano_1.png';
import cfcslarge1 from '../assets/images/projects/slider/CentroFamiliarCristiano_1_1.png';
import cfcsmall2 from '../assets/images/projects/slider/CentroFamiliarCristiano_2.png';
import cfcslarge2 from '../assets/images/projects/slider/CentroFamiliarCristiano_2_1.png';
import cfcsmall3 from '../assets/images/projects/slider/CentroFamiliarCristiano_3.png';
import cfcslarge3 from '../assets/images/projects/slider/CentroFamiliarCristiano_3_1.png';
import cfcsmall4 from '../assets/images/projects/slider/CentroFamiliarCristiano_4.png';
import cfcslarge4 from '../assets/images/projects/slider/CentroFamiliarCristiano_4_1.png';
import noventaminutos1 from '../assets/images/projects/slider/90_minutos_1.png';
import noventaminutos11 from '../assets/images/projects/slider/90_minutos_1_1.png';
import noventaminutos2 from '../assets/images/projects/slider/90_minutos_2.png';
import noventaminutos21 from '../assets/images/projects/slider/90_minutos_2_1.png';
import noventaminutos3 from '../assets/images/projects/slider/90_minutos_3.png';
import noventaminutos31 from '../assets/images/projects/slider/90_minutos_3_1.png';
import noventaminutos4 from '../assets/images/projects/slider/90_minutos_4.png';
import noventaminutos41 from '../assets/images/projects/slider/90_minutos_4_1.png';
import supresencia1 from '../assets/images/projects/slider/SuPresencia_1.png';
import supresencia11 from '../assets/images/projects/slider/SuPresencia_1_1.png';
import supresencia2 from '../assets/images/projects/slider/SuPresencia_2.png';
import supresencia21 from '../assets/images/projects/slider/SuPresencia_2_1.png';
import supresencia3 from '../assets/images/projects/slider/SuPresencia_3.png';
import supresencia31 from '../assets/images/projects/slider/SuPresencia_3_1.png';
import supresencia4 from '../assets/images/projects/slider/SuPresencia_4.png';
import supresencia141 from '../assets/images/projects/slider/SuPresencia_4_1.png';
import misioncarismatica1 from '../assets/images/projects/slider/MisionCarismaticaInternacional_1.png';
import misioncarismatica11 from '../assets/images/projects/slider/MisionCarismaticaInternacional_1_1.png';
import misioncarismatica2 from '../assets/images/projects/slider/MisionCarismaticaInternacional_2.png';
import misioncarismatica21 from '../assets/images/projects/slider/MisionCarismaticaInternacional_2_1.png';
import misioncarismatica3 from '../assets/images/projects/slider/MisionCarismaticaInternacional_3.png';
import misioncarismatica31 from '../assets/images/projects/slider/MisionCarismaticaInternacional_3_1.png';
import misioncarismatica4 from '../assets/images/projects/slider/MisionCarismaticaInternacional_4.png';
import misioncarismatica41 from '../assets/images/projects/slider/MisionCarismaticaInternacional_4_1.png';
import aguaviva1 from '../assets/images/projects/slider/Agua_viva_1.png';
import aguaviva11 from '../assets/images/projects/slider/Agua_viva_1_1.png';
import aguaviva2 from '../assets/images/projects/slider/Agua_viva_2.png';
import aguaviva21 from '../assets/images/projects/slider/Agua_viva_2_1.png';
import aguaviva3 from '../assets/images/projects/slider/Agua_viva_3.png';
import aguaviva31 from '../assets/images/projects/slider/Agua_viva_3_1.png';
import aguaviva4 from '../assets/images/projects/slider/Agua_viva_4.png';
import aguaviva41 from '../assets/images/projects/slider/Agua_viva_4_1.png';



export const projectData = {
    'project1': {
      title: 'Centro Familiar Cristiano',
      description: 'En una ciudad donde las condiciones son muy limitadas logramos trabajar en conjunto con un grupo de arquitectos e ingenieros para ' +
                   'aterrizar un sueño: la construcción del auditorio Emprendedores, el primer centro de convenciones de Sucre y uno de los templos con mayor ' +  
                   'prestigio gracias al diseño de su sistema de audio, video e iluminación. Diseño en el que paticipamos con asesoría, venta e implementación ' +
                   'de todos los equipos. \n' +
                   '\n El Auditorio Emprendedores se ha convertido en lugar de referencia para decir que las limitaciones solo las pone el hombre, porque todos los ' +
                   'sueños de Dios se hacen posibles.',
      image: cfc,  
      location: 'Sincelejo, Colombia',
      capacity: '2000 personas',
      services: 'Participación en la construcción del auditorio',
      carouselImages: [
        {small: cfcsmall1, large: cfcslarge1},
        {small: cfcsmall2 , large: cfcslarge2 },
        {small: cfcsmall3, large: cfcslarge3},
        {small: cfcsmall4, large: cfcslarge4 },
      ]
    }, 
    'project2': {
      title: '90 Minutos',
      description: 'Es el noticiero regional del pacífico Colombiano, que cuenta diariamente los sucesos más destacados de la actualidad Colombiana por el canal ' +
                   'Telepacífico. \n' +
                   '\n Desarrollamos para este, que es uno de los noticieros regionales más premiados de la televisión Colombiana todo el sistema de flujos para las ' +
                   'Noticias: Playout, almacenamiento, switcher para transmisiones en vivo, sistemas de gráficos, cámaras de estudio y la más alta tecnología que les ' +
                   'puso a la vanguardia en el ejercicio de mantener informados. \n' +
                   '\n Siendo este noticiero perteneciente a la Universidad Autónoma de Occidente, somos también uno de los principales proveedores de la ' +
                   'universidad para toda el área de video, audio e iluminación de las diferentes facultades.',
      image: noventaminutos,
      location: 'Cali, Colombia',
      capacity: '',
      services: 'Participación en la construcción del centro de '+ 
                'transición del noticiero para la Universidad ' + 
                'Autónoma de Occidente',
      carouselImages: [
        {small: noventaminutos1, large: noventaminutos11},
        {small: noventaminutos2 , large: noventaminutos21 },
        {small: noventaminutos3, large: noventaminutos31},
        {small: noventaminutos4, large: noventaminutos41 },
      ]
    },
    'project3': {
      title: 'El Lugar de su Presencia',
      description: 'El lugar de Su Presencia es una de las iglesias de mayor impacto en Colombia debido a su gran crecimiento. Con una propuesta de ' +
                  'musical de vanguardia ha logrado atraer gran catidad de jóvenes y han llegado a ser reconocidos en toda Latinoamérica. \n' +
                  '\n Ha sido de las primeras iglesias que se procupó por construir un auditorio de alto nivel, que cumpliera con la calidad de audio, ' +
                  'video, iluminación de un teatro de talla mundial. \n' +
                  '\n EJM ha tenido la oportunidad de acompañar a esta iglesia en ese crecimiento proveyendo asesoría especializada y equipos de alta ' +
                  'calidad que logren ser fieles a la excelencia que ha hecho de esta iglesia una de las más influyentes en el mundo,',
      image: elp,
      location: 'Bogotá, Colombia',
      capacity: '3000 personas',
      services: 'Suministro de equipos de video, ' +
                'audio e iluminación.',
      carouselImages: [
        {small: supresencia1, large: supresencia11},
        {small: supresencia2, large: supresencia21},
        {small: supresencia3, large: supresencia31},
        {small: supresencia4, large: supresencia141},
      ]
    },
    'project4': {
      title: 'Misión Carismática Internacional MCI',
      description: 'Por más de 30 años este ministerio se ha convertido en ejemplo para muchas naciones, debido a su gran crecimiento y alcance, actualmente ' + 
                   'cuenta con 142 sedes en Colombia y en el mundo. \n' +
                   '\n Se conoce por desarrollar grandes congresos y convenciones internacionales en donde nosotros somos pieza clave para dinamizar el '+ 
                   'funcionamiento de sus eventos, brindando diferentes soluciones de video, audio e iluminación. En este caso nos hemos distinguido por ' +
                   'nuestra efectividad en la rápida entrega y en el buen manejo de las contingencias con requerimientos de último minuto. ',
      image: mci,
      location: 'Bogotá, Colombia',
      capacity: '10.000 personas',
      services: 'Suministro de equipos de video, ' +
                'audio e iluminación.',
      carouselImages: [
        {small: misioncarismatica1, large: misioncarismatica11},
        {small: misioncarismatica2, large: misioncarismatica21},
        {small: misioncarismatica3, large: misioncarismatica31},
        {small: misioncarismatica4, large: misioncarismatica41},
      ]
    },
    'project5': {
      title: 'Comunidad Cristiana Agua Viva',
      description: 'La Iglesia Agua Viva de Perú, ha sido uno de nuestros grandes desafios. Apoyarlos en la transformación del antiguo Coliseo Amauta, para ser el ' + 
                   'nuevo y moderno Centro de Convenciones Agua Viva fue todo un reto; como también un sueño hecho realidad, ya que sin dudas será uno de los ' +
                   'centros Cristianos más grandes y más importantes de America Latina. \n' +
                   '\n Para este proyecto fuimos consultores y proveedroes de la solución audiovisual, para poner en marcha el funcionamiento de los recursos en esta ' +
                   'mole de 23,000 metros cuadrados con una capacidad para 25,000 mil personas. \n',
      image: ccav,
      location: 'Lima, Perú',
      capacity: '25.000 personas',
      services: 'Suministro de equipos y asesoría a su'+
                ' departamento de media',
      carouselImages: [
        {small: aguaviva1, large: aguaviva11},
        {small: aguaviva2, large: aguaviva21},
        {small: aguaviva3, large: aguaviva31},
        {small: aguaviva4, large: aguaviva41},
      ]

    },
    'project6': {
      title: 'Revista Semana',
      description: 'Publicaciones Semana se ha convertido en el medio de comunicación de socialmedia y streaming más relevante de Colombia y ' +
                   'nos complace haber sido parte fundamental en el desarrollo de este proyecto utilizando tecnología de punta e implmentando la ' +
                   'primera solución de transmision en vivo por IP en Colombia con éxito rotundo usando la tecnología de vanguardia que ha '+
                   'presentado JVC Kenwood y que Canales como TELEVISA y ABC la han implementado con éxito y han hecho ahorros millonarios '+
                   'para su tráfico de transmisiones en vivo. \n ' +
                   '\n Este proyecto modelo en Colombia es insignia de los grandes desafios técnicos que hemos desarrollado como compañía.',
      image: revistasemana,
      location: 'Colombia',
      capacity: '',
      services: 'Dotación e implementación del sistema audiovisual '+
                'para su propuesta virtual informativa ',
      carouselImages: [

      ]
    },

  };



  