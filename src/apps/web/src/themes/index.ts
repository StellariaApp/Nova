'use client';

import type { Components, Palette, Theme } from '@stellaria/supernova';
import { css } from '@stellaria/supernova';

const components: Components = {
  button: () => css``
};

const dark: Palette = {
  colors: {
    primary: '#fafafa',
    primaryHover: '#e2e2e2',

    secondary: '#18181b',
    secondaryHover: '#272727',

    text: '#ffffff',
    textAlt: '#18181b',

    background: '#000000',

    border: `1px solid #3f3f3f`,
    borderAlt: `1px solid #d6d6d6`,

    shadow: '0px 0px 8px #00000025',
    shadowAlt: '0px 0px 4px #0000000c'
  },
  components
};

const light: Palette = {
  colors: {
    primary: '#18181b',
    primaryHover: '#272727',

    secondary: '#fcfcfc',
    secondaryHover: '#ebebeb',

    text: '#18181b',
    textAlt: '#ffffff',

    background: '#ffffff',

    border: `1px solid #d6d6d6`,
    borderAlt: `1px solid #3f3f3f`,

    shadow: '0px 0px 8px #00000080',
    shadowAlt: '0px 0px 4px #0000003a'
  },
  components
};

const themes: Theme = {
  dark,
  light
};

export default themes;
