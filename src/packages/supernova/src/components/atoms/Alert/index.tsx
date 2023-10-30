import { Icon } from '../Icon';
import { AlertContainer } from './components/container';
import { AlertTitle } from './components/title';
import { AlertDescription } from './components/description';
import type { AlertProps } from './types';

const Alert = (props: AlertProps) => {
  const { title, description, icon } = props;
  return (
    <AlertContainer>
      <Icon name={icon} />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </AlertContainer>
  );
};

Alert.Container = AlertContainer;
Alert.Icon = Icon;
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export { Alert };

export type * from './types';
