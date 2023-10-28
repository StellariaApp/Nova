import type { CSSTheme } from '../../../types';
import { css, cv } from '../../../utils/css';

const baseContainer: CSSTheme = () => css`
  width: 100%;
  height: max-content;
  user-select: none;
  transition: all 0.2s ease-in-out;

  details[open] > summary {
  }

  details[open] > p {
    opacity: 1;
  }
`;

export const StylesAccordionContainer = cv({
  base: baseContainer
});

const baseItem: CSSTheme = (theme) => css`
  width: 100%;
  height: max-content;
  padding: 10px 0;
  border-bottom: ${theme?.colors?.border ?? '1px solid #e5e5e5'};
  list-style: none;
  transition: all 0.2s ease-in-out;
`;

export const StylesAccordionItem = cv({
  base: baseItem
});

const baseTrigger: CSSTheme = (theme) => css`
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

export const StylesAccordionTrigger = cv({
  base: baseTrigger
});

const baseContent: CSSTheme = (theme) => css`
  width: 100%;
  height: max-content;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: 600;
  color: ${theme?.colors?.textSecondary ?? '#000'};

  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

export const StylesAccordionContent = cv({
  base: baseContent
});
