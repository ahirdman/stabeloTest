import { useAnimation } from 'framer-motion';
import * as React from 'react';
import * as Styled from './styled';

interface IElevatorProps {
  floor: number;
}

interface ITransition {
  duration: number;
}

const Elevator = ({ floor }: IElevatorProps) => {
  const [currentFloor, setCurrentFloor] = React.useState<number>();

  const controls = useAnimation();

  const elevatorTransition: ITransition = {
    duration: Math.abs(currentFloor - floor) * 2,
  };

  const steelHeight = 700 - floor * 35;
  const steelTop = -Math.abs(floor * 35 - 35);

  React.useEffect(() => {
    setCurrentFloor(floor);

    const controllerOptions = {
      rotate: 360,
      transition: elevatorTransition,
    };

    if (controllerOptions.transition.duration) {
      controls.start(controllerOptions);
    }
  }, [floor]);

  return (
    <Styled.Container>
      <Styled.Spinner animate={controls}>
        <Styled.Gear />
      </Styled.Spinner>
      <Styled.ElevatorShaft>
        <Styled.SteelWire
          style={{
            top: steelTop,
            height: steelHeight,
          }}
          layout={true}
          transition={elevatorTransition}
        />
        <Styled.Elevator
          style={{ bottom: floor * 35 - 35 }}
          layout={true}
          transition={elevatorTransition}
        />
      </Styled.ElevatorShaft>
    </Styled.Container>
  );
};

export default Elevator;
