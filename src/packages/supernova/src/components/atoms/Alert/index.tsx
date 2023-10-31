import { Icon } from '../Icon';
import { AlertContainer } from './components/container';
import { AlertTitle } from './components/title';
import { AlertIcon } from './components/icon';
import { AlertButton } from './components/button';
import { AlertDescription } from './components/description';
import type { AlertProps } from './types';

const Alert = (props: AlertProps) => {
  const { title, description, icon, components, percentage, onClick } = props;
  return (
    <AlertContainer percentage={percentage} {...components?.container}>
      <AlertIcon icon={icon} {...components?.icon} />
      <AlertTitle {...components?.title}>{title}</AlertTitle>
      <AlertDescription {...components?.description}>
        {description}
      </AlertDescription>
      <AlertButton onClick={onClick} {...components?.button} />
    </AlertContainer>
  );
};

Alert.Container = AlertContainer;
Alert.Icon = Icon;
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.Button = AlertButton;

export { Alert };

export type * from './types';
