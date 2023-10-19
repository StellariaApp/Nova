import { css, cv } from '../../../utils/css';

const cssBase = css`
  width: max-content;
  height: max-content;
  padding: 0.5rem 1.125rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 600;
  color: white;
  transition: all 0.2s ease-in-out;
`;

const cssFlat = css`
  box-shadow: 0px 0px 8px #00000025;
  background-color: #18181b;
  border: 1px solid #18181b;
  :hover {
    box-shadow: 0px 0px 8px #00000080;
    background-color: #272727;
    border: 1px solid #272727;
  }
`;

const cssOutline = css`
  box-shadow: 0px 0px 4px #0000000c;
  background-color: transparent;
  border: 1px solid #d6d6d6;
  color: #474747;
  :hover {
    box-shadow: 0px 0px 4px #0000003a;
    background-color: #fcfcfc;
    color: #474747;
  }
`;

const cssNone = css`
  padding: 0;
  background-color: transparent;
  color: #18181b;
`;

export const cvAsTypeButton = cv({
  base: cssBase,
  flat: cssFlat,
  none: cssNone,
  outline: cssOutline
});

const cssDisabled = css`
  background-color: #ebebeb;
  box-shadow: 0px 0px 4px #0000001e;
  border: 1px solid #d6d6d6;
  box-shadow: none;
  color: #afafaf;
  cursor: not-allowed;
  opacity: 0.8 !important;
  :hover {
    box-shadow: none;
    background-color: #ebebeb;
    border: 1px solid #d6d6d6;
  }
`;

export const cvStylesButton = cv({
  disabled: cssDisabled
});
