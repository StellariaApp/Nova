import type { Ref } from 'react';
import { forwardRef } from 'react';
import { Button, type ButtonProps } from '../../Button';
import { StylesButton } from '../styles';
import { Icon } from '../../Icon';

const AlertButtonRef = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { classes } = StylesButton(props);
  return (
    <Button {...props} ref={ref} className={classes}>
      <Icon icon="xmark" />
    </Button>
  );
};

export const AlertButton = forwardRef(AlertButtonRef);
