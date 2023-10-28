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

    text: '#ffffff',
    textAlt: '#18181b',

    background: '#000000',

    border: '1px solid #18181b',
    shadow: '0px 0px 8px #00000025'
  },
  components
};

const light: Palette = {
  colors: {
    primary: '#18181b',
    primaryHover: '#272727',

    text: '#18181b',
    textAlt: '#ffffff',

    background: '#ffffff',

    border: '1px solid #d6d6d6',
    shadow: '0px 0px 8px #00000080'
  },
  components
};

const themes: Theme = {
  dark,
  light
};

export default themes;
