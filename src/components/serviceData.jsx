import headerservice from '../assets/images/services/Header_servicios.png';
import foto from '../assets/images/services/Foto.png';

export const serviceData =  {
    'asesoria': {
        id:'1',
        title: 'ASESORÍA EN DISEÑO Y CONSTRUCCIÓN',
        image: headerservice,
        information: [
            {
                title: 'LO ACOMPAÑAMOS EN TODAS '+
                       'LAS ETAPAS DE SU PROYECTO',
                subtitle: 'Desde el diseño hasta la construcción de auditorios, teatros, iglesias, ' +
                          'salones de conferencias y departamentos de producción; así como en ' +
                          'la planeación, montaje y ejecución de eventos como shows en vivo, ' +
                          'servicios religiosos, conciertos, etc., sin dejar pasar ningún detalle. \n' +
                          '\n Contamos con un equipo técnico de primera línea en cada país, con '+
                          'gran experiencia brindando soluciones en proyectos destacados ' +
                          'nacional e internacionalmente. ',
                paragraph: 'Somos el camino más seguro para hacer sus sueños realidad.',
                image: foto
            }
        ]
    },

    'venta': {
        id:'2',
        title: 'VENTA DE EQUIPOS DE BROADCAST',
        image: headerservice,
        information: [
            {
                title: 'RECIBA LOS MEJORES \n'+
                       'PRECIOS DEL \n '+
                       'MERCADO',
                subtitle: 'Cuente con el beneficio exclusivo para nuestros clientes de asistencia ' +
                          'directa por parte de los principales fabricantes de equipos de audio, ' +
                          'video y proyección. Gracias a la relación que por años hemos ' +
                          'construido con las grandes maras del mundo del Broadcast.',
                paragraph: ' ',
                image: foto
            }
        ]
    },

    'talleres': {
        id:'2',
        title: 'TALLERES Y SEMINARIOS',
        image: headerservice,
        information: [
            {
                title: 'SOMOS UNA FUENTE  \n'+
                       'CONFIABLE DE CONSULTA',
                subtitle: 'Para entender la utilidad de cada recurso y su razón para utilizarlo ' +
                          'nuestro objetivo es promover el uso correcto de los equipos de audio, ' +
                          'video y proyección de acuerdo a los parámetros científicos ' +
                          'desarrollados por nuestra compañia en diferentes experiencias.',
                paragraph: ' ',
                image: foto
            }
        ]
    }
}

