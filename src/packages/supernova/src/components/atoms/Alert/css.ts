import type { CSSTheme } from '../../../types';
import { css, cv } from '../../../utils/css';

const baseContainer: CSSTheme = () => css`
  width: 100%;
  height: max-content;
  user-select: none;

  transition: all 0.2s ease-in-out;
`;

export const StylesAlertContainer = cv({
  base: baseContainer
});

const baseTitle: CSSTheme = (theme) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  color: ${theme?.colors?.text ?? '#000'};

  transition: all 0.2s ease-in-out;
`;

export const StylesAlertTitle = cv({
  base: baseTitle
});

const baseDescription: CSSTheme = (theme) => css`
  width: 100%;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 600;
  color: ${theme?.colors?.textSecondary ?? '#000'};

  transition: all 0.2s ease-in-out;
`;

export const StylesAlertDescription = cv({
  base: baseDescription
});
