import { colord } from 'colord';
import { tone } from './opasity';

export const colors = {
  /* Цвет текста */
  colorTextLight: '#FFFFFF',
  colorTextDark: '#212226',
  colorTag: '#80838C',

  /* Основные цвета */
  colorWhite: '#FFFFFF',
  colorLightBlueGrey: '#F1F3F8',
  colorBlueGrey: '#E7EAF2',
  colorLightGrey: '#828386',
  colorGrey: '#2F3136',
  colorBlack: '#212226',
  colorOverlay: colord('#212226').alpha(tone.toneOverlay).toRgbString(),
  colorRed: '#212226',
  colorDarkGrey: '#3A3C42',

  /* Цвет состояний */
  colorPrimaryDefault: '#FC203C',
  colorPrimarySucces: '#28CD41',
  colorPrimaryHover: '#FF334D',
  colorPrimaryDisable: colord('#FC203C').alpha(tone.toneHover).toRgbString(),

  colorSecondaryDarkDefault: '#27282D',
  colorSecondaryDarkHover: '#2F3136',
  colorSecondaryDarkDisable: colord('#27282D').alpha(tone.toneHover).toRgbString(),

  colorSecondaryLightDefault: '#E7EAF2',
  colorSecondaryLightHover: '#DBE0EC',
  colorSecondaryLightDisable: colord('#E7EAF2').alpha(tone.toneHover).toRgbString(),

} as const;
