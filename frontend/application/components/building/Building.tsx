import * as React from 'react';
import * as Styled from './styled';
import * as ElevatorControl from '../../utils/elevatorControl';
import { IElevator } from '../../utils/interface';
import Elevator from '../elevator/Elevator';
import Floors from '../floors/Floors';

const Building = () => {
  const [elevators, setElevators] = React.useState([] as IElevator[]);

  React.useEffect(() => {
    ElevatorControl.getElevators(setElevators);
  }, []);

  return (
    <Styled.Building>
      <Floors elevators={elevators} setElevators={setElevators} />
      {elevators.map((elevator: IElevator) => (
        <Elevator floor={elevator.floor} key={elevator.id} />
      ))}
    </Styled.Building>
  );
};

export default Building;
