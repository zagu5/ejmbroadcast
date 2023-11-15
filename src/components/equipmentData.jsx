import accesoriosImage from '../assets/images/equipment/Header_equipos_2.png';
import fotografiayvideoIcon from '../assets/images/equipment/group.svg';
import tripodeIcon from '../assets/images/equipment/tripode.svg';
import audioIcon from '../assets/images/equipment/audioIcon.svg';
import softwareIcon from '../assets/images/equipment/softwareIcon.svg';
import headerSoftware from '../assets/images/equipment/Header_software.png';

import sony from '../assets/images/brands/sony.png';
import datavideo from '../assets/images/brands/datavideo.png';
import panasonic from '../assets/images/brands/panasonic.png';
import canon from '../assets/images/brands/Canon.png';
import red from '../assets/images/brands/Red.png';
import newtek from '../assets/images/brands/Newtek.png';
import birddog from '../assets/images/brands/BirdDog.png';
import jvc from '../assets/images/brands/JVC.png';
import aidaimaging from '../assets/images/brands/Aida.png';
import ptzoptics from '../assets/images/brands/PTZOptics.png';
import blackmagic from '../assets/images/brands/Black_Magic.png';
import fujifilm from '../assets/images/brands/Fujifilm.png';
import teradek from '../assets/images/brands/Teradek.png';
import manfrotto from '../assets/images/brands/Manfrotto.png';
import acebil from '../assets/images/brands/Acebil.png';
import roland from '../assets/images/brands/Roland.png';
import aja from '../assets/images/brands/Aja.png';
import canare from '../assets/images/brands/Canare.png';
import magewell from '../assets/images/brands/Magewell.png';
import nanlite from '../assets/images/brands/Nanlite.png';
import atomos from '../assets/images/brands/Atomos.png';
import angelbird from '../assets/images/brands/Angelbird.png';
import eartec from '../assets/images/brands/Eartec.png';
import unilumin from '../assets/images/brands/Unilumin.png';
import lacie from '../assets/images/brands/Lacie.png';
import swit from '../assets/images/brands/Swit.png';
import shure from '../assets/images/brands/Shure.png';
import bose from '../assets/images/brands/Bose.png';
import azden from '../assets/images/brands/Azden.png';
import resi from '../assets/images/brands/Resi.png';
import wowza from '../assets/images/brands/Wowza.png';
import vegas from '../assets/images/brands/Vegas.png';
import telestream from '../assets/images/brands/Telestream.png';
import magix from '../assets/images/brands/Magix.png';
import reckreen from '../assets/images/brands/Reckreen.png';
import softron from '../assets/images/brands/Softron.png';
import yololiv from '../assets/images/brands/Yololiv.png';
import iconvideo from '../assets/images/brands/iconvideo.svg';
import iconaccesorios from '../assets/images/brands/iconaccesorios.svg';
import iconaudio from '../assets/images/brands/iconaudio.svg';
import iconsoftware from '../assets/images/brands/iconsoftware.svg';

export const equipmentData = {
    fotografiayvideo: { 
      image: accesoriosImage,
      title: 'FOTOGRAFÍA Y VIDEO',
      icon: fotografiayvideoIcon,
      text: 'MARCAS ALIADAS',
      brands: [
        {name: 'panasonic', image: panasonic, minicon:iconvideo },
        {name: 'sony', image: sony, minicon:iconvideo},
        {name: 'canon', image: canon, minicon:iconvideo},
        {name: 'datavideo', image: datavideo, minicon:iconvideo},
        {name: 'red', image: red, minicon:iconvideo},
        {name: 'newTek', image: newtek, minicon:iconvideo},
        {name: 'birdDog', image: birddog, minicon:iconvideo},
        {name: 'jvc', image: jvc, minicon:iconvideo},
        {name: 'aidaImaging', image: aidaimaging, minicon:iconvideo},
        {name: 'optics', image: ptzoptics, minicon:iconvideo},
      ]
    },
    accesorios: {
      image: accesoriosImage,
      title: 'ACCESORIOS DE FOTO Y VIDEO',
      icon: tripodeIcon,
      brands: [
        {name: 'panasonic', image: sony, minicon:iconaccesorios },
        {name: 'sony', image: canon, minicon:iconaccesorios},
        {name: 'canon', image: blackmagic, minicon:iconaccesorios},
        {name: 'datavideo', image: fujifilm, minicon:iconaccesorios},
        {name: 'red', image: teradek, minicon:iconaccesorios},
        {name: 'newTek', image: manfrotto, minicon:iconaccesorios},
        {name: 'birdDog', image: acebil, minicon:iconaccesorios},
        {name: 'jvc', image: roland, minicon:iconaccesorios},
        {name: 'aidaImaging', image: aja, minicon:iconaccesorios},
        {name: 'aidaImaging', image: canare, minicon:iconaccesorios},
        {name: 'aidaImaging', image: aja, minicon:iconaccesorios},
        {name: 'optics', image: magewell, minicon:iconaccesorios},
        {name: 'aidaImaging', image: nanlite, minicon:iconaccesorios},
        {name: 'aidaImaging', image: atomos, minicon:iconaccesorios},
        {name: 'aidaImaging', image: angelbird, minicon:iconaccesorios},
        {name: 'aidaImaging', image: eartec, minicon:iconaccesorios},
        {name: 'aidaImaging', image: unilumin, minicon:iconaccesorios},
        {name: 'aidaImaging', image: lacie, minicon:iconaccesorios},
        {name: 'aidaImaging', image: swit, minicon:iconaccesorios},
      ]
    },
    audio: {
        image: headerSoftware,
        title: 'AUDIO',
        icon: audioIcon,
        brands: [
          {name: 'panasonic', image: panasonic, minicon:iconaudio },
          {name: 'sony', image: shure, minicon:iconaudio},
          {name: 'canon', image: bose, minicon:iconaudio},
          {name: 'datavideo', image: roland, minicon:iconaudio},
          {name: 'red', image: azden, minicon:iconaudio},
        ]
    },
    software: {
        image: headerSoftware,
        title: 'SOTWARE E INTERFACES',
        icon: softwareIcon,
        brands: [
          {name: 'panasonic', image: blackmagic, minicon:iconsoftware },
          {name: 'sony', image: birddog, minicon:iconsoftware},
          {name: 'canon', image: resi, minicon:iconsoftware},
          {name: 'datavideo', image: wowza, minicon:iconsoftware},
          {name: 'red', image: vegas, minicon:iconsoftware},
          {name: 'newTek', image: telestream, minicon:iconsoftware},
          {name: 'birdDog', image: magix, minicon:iconsoftware},
          {name: 'jvc', image: reckreen, minicon:iconsoftware},
          {name: 'aidaImaging', image: softron, minicon:iconsoftware},
          {name: 'optics', image: yololiv, minicon:iconsoftware},
        ]
    },  

}; 