import { AlertContainer } from './components/container';
import { AlertTitle } from './components/title';
import { AlertDescription } from './components/description';

const Alert = () => {
  return (
    <AlertContainer id="dialog-box" className="warning">
      <AlertTitle>Message Title</AlertTitle>
      <AlertDescription>Message text</AlertDescription>
    </AlertContainer>
  );
};

Alert.Container = AlertContainer;
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export { Alert };

export type * from './types';
