import accesoriosImage from '../assets/images/equipment/Header_equipos_2.png';
import fotografiayvideoIcon from '../assets/images/equipment/group.svg';
import tripodeIcon from '../assets/images/equipment/tripode.svg';
import audioIcon from '../assets/images/equipment/audioIcon.svg';
import softwareIcon from '../assets/images/equipment/softwareIcon.svg';
import headerSoftware from '../assets/images/equipment/Header_software.png';

import panasonic from '../assets/images/brands/Panasonic_Fotografia.png';
import sony from '../assets/images/brands/Sony_Fotografia.png';
import canon from '../assets/images/brands/Canon_Fotografia.png';
import datavideo from '../assets/images/brands/Datavideo_Fotografia.png';
import red from '../assets/images/brands/Red_Fotografia.png';
import newtek from '../assets/images/brands/NewTek_Fotografia.png';
import birddog from '../assets/images/brands/BirdDog_Fotografia.png';
import jvc from '../assets/images/brands/JVC_Fotografia.png';
import aidaimaging from '../assets/images/brands/Aida_Fotografia.png';
import ptzoptics from '../assets/images/brands/PTZOptics_Fotografia.png';
// import fujifilm from '../assets/images/brands/Fujifilm_Fotografia.png';
import sony_accesorios from '../assets/images/brands/Sony_Accesorios.png';
import canon_accesorios from '../assets/images/brands/Canon_Accesorios.png';
import blacmagic_accesorios from '../assets/images/brands/Blackmagic_Accesorios.png';
import fujifilm_accesorios from '../assets/images/brands/Fujifilm_Accesorios.png';
import teradek_accesorios from '../assets/images/brands/Teradek_Accesorios.png';
import manfrotto_accesorios from '../assets/images/brands/Manfrotto_Accesorios.png';
import aceail_accesorios from '../assets/images/brands/acebil_Accesorios.png';
import roland_accesorios from '../assets/images/brands/Roland_Accesorios.png';
import aja_accesorios from '../assets/images/brands/Aja_Accesorios.png';
import canare_accesorios from '../assets/images/brands/Canare_Accesorios.png';
import magewell_accesorios from '../assets/images/brands/Magewell_Accesorios.png';
import nanlite_accesorios from '../assets/images/brands/Nanlite_Accesorios.png';
import atomos_accesorios from '../assets/images/brands/Atomos_Accesorios.png';
import angelbird_accesorios from '../assets/images/brands/Angelbird_Accesorios.png';
import eartec_accesorios from '../assets/images/brands/Eartec_Accesorios.png';
import unilumin_accesorios from '../assets/images/brands/Unilumin_Accesorios.png';
import lacie_accesorios from '../assets/images/brands/Lacie_Accesorios.png';
import swit_accesorios from '../assets/images/brands/Swit_Accesorios.png';
import panasonic_audio from '../assets/images/brands/Panasonic_Audio.png';
import shure_audio from '../assets/images/brands/Shure_Audio.png';
import bose_audio from '../assets/images/brands/Bose_Audio.png';
import roland_audio from '../assets/images/brands/Roland_Audio.png';
import azden_audio from '../assets/images/brands/Azden_Audio.png';
import blackmagic_interfaces from '../assets/images/brands/Blackmagic_Interfaces.png';
import birddog_interfaces from '../assets/images/brands/BirdDog_Interfaces.png';
import resi_interfaces from '../assets/images/brands/Resi_Interfaces.png';
import wowza_interfaces from '../assets/images/brands/Wowza_Interfaces.png';
import vegas_interfaces from '../assets/images/brands/Vegas_Interfaces.png';
import telestream_interfaces from '../assets/images/brands/Telestream_Interfaces.png';
import magix_interfaces from '../assets/images/brands/Magix_Interfaces.png';
import reckreen_interfaces from '../assets/images/brands/Reckreen_Interfaces.png';
import softron_interfaces from '../assets/images/brands/Softron_Interfaces.png';
import yololiv_interfaces from '../assets/images/brands/Yololiv_Interfaces.png';




export const equipmentData = {
    fotografiayvideo: { 
      image: accesoriosImage,
      title: 'FOTOGRAFÍA Y VIDEO',
      icon: fotografiayvideoIcon,
      text: 'MARCAS ALIADAS',
      brands: [
        {name: 'panasonic', image: panasonic},
        {name: 'sony', image: sony},
        {name: 'canon', image: canon},
        {name: 'datavideo', image: datavideo},
        {name: 'red', image: red},
        {name: 'newTek', image: newtek},
        {name: 'birdDog', image: birddog},
        {name: 'jvc', image: jvc},
        {name: 'aidaImaging', image: aidaimaging},
        {name: 'optics', image: ptzoptics},
        // {name: 'fujifilm', image: fujifilm},
      ]
    },
    accesorios: {
      image: accesoriosImage,
      title: 'ACCESORIOS DE FOTO Y VIDEO',
      icon: tripodeIcon,
      text: 'MARCAS ALIADAS',
      brands: [
        {name: 'sony_accesorios', image: sony_accesorios},
        {name: 'canon_accesorios', image: canon_accesorios},
        {name: 'blacmagic_accesorios', image: blacmagic_accesorios},
        {name: 'fujifilm_accesorios', image: fujifilm_accesorios},
        {name: 'teradek_accesorios', image: teradek_accesorios},
        {name: 'manfrotto_accesorios', image: manfrotto_accesorios},
        {name: 'aceail_accesorios', image: aceail_accesorios},
        {name: 'roland_accesorios', image: roland_accesorios},
        {name: 'aja_accesorios', image: aja_accesorios},
        {name: 'canare_accesorios', image: canare_accesorios},
        {name: 'magewell_accesorios', image: magewell_accesorios},
        {name: 'nanlite_accesorios', image: nanlite_accesorios},
        {name: 'atomos_accesorios', image: atomos_accesorios},
        {name: 'angelbird_accesorios', image: angelbird_accesorios},
        {name: 'eartec_accesorios', image: eartec_accesorios},
        {name: 'unilumin_accesorios', image: unilumin_accesorios},
        {name: 'lacie_accesorios', image: lacie_accesorios},
        {name: 'swit_accesorios', image: swit_accesorios},

      ]
    },
    audio: {
        image: headerSoftware,
        title: 'AUDIO',
        icon: audioIcon,
        text: 'MARCAS ALIADAS',
        brands: [
          {name: 'panasonic_audio', image: panasonic_audio},
          {name: 'shure_audio', image: shure_audio},
          {name: 'bose_audio', image: bose_audio},
          {name: 'roland_audio', image: roland_audio},
          {name: 'azden_audio', image: azden_audio},
        ]
    },
    software: {
        image: headerSoftware,
        title: 'SOFTWARE E INTERFACES',
        icon: softwareIcon,
        text: 'MARCAS ALIADAS',
        brands: [
          {name: 'blackmagic_interfaces', image: blackmagic_interfaces },
          {name: 'birddog_interfaces', image: birddog_interfaces},
          {name: 'resi_interfaces', image: resi_interfaces},
          {name: 'wowza_interfaces', image: wowza_interfaces},
          {name: 'vegas_interfaces', image: vegas_interfaces},
          {name: 'telestream_interfaces', image: telestream_interfaces},
          {name: 'magix_interfaces', image: magix_interfaces},
          {name: 'reckreen_interfaces', image: reckreen_interfaces},
          {name: 'softron_interfaces', image: softron_interfaces},
          {name: 'yololiv_interfaces', image: yololiv_interfaces},
        ]
    },  

}; 