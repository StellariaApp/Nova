import { Alert } from '@stellaria/supernova';
import useTimer from '../hooks/useTimer';

const AlertWithTime = () => {
  const { progress, reset } = useTimer({
    time: 6,
    onCompleted: () => {
      reset();
    }
  });

  return (
    <Alert
      onClick={() => {
        alert('clicked');
      }}
      percentage={progress}
      variant="success"
      icon="check-double"
      title="This is a success alert"
      description="This is a success alert description"
    />
  );
};

export default AlertWithTime;
