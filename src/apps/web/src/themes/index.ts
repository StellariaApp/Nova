'use client';

import type { Components, Palette, Theme } from '@stellaria/supernova';
import { css } from '@stellaria/supernova';

const components: Components = {
  button: {
    css: () => css``
  }
};

const dark: Palette = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',

    background: '#000000'
  },
  components
};

const light: Palette = {
  colors: {
    primary: '#ffffff',
    secondary: '#000000',

    background: '#ffffff'
  },
  components
};

const themes: Theme = {
  dark,
  light
};

export default themes;
