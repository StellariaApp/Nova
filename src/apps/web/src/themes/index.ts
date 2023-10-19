'use client';

import { css } from '@stellaria/supernova';
import type { Palette } from '@stellaria/supernova/src/types/palette';

const dark: Palette = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff'
  }
};

const light: Palette = {
  colors: {
    primary: '#ffffff',
    secondary: '#000000'
  },
  components: {
    button: {
      css: () => css``
    }
  }
};

const themes = {
  dark,
  light
};

export default themes;
