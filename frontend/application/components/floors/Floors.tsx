import * as React from 'react';
import * as Styled from './styled';
import * as ElevatorControl from '../../utils/elevatorControl';
import { IElevator } from '../../utils/interface';

const arrayGenerator = (amount: number) =>
  Array.from({ length: amount }, (_, i) => i + 1).reverse();

interface IFloorsProps {
  elevators: IElevator[];
  setElevators: (data: IElevator[]) => void;
}

const Floors = ({ elevators, setElevators }: IFloorsProps) => {
  const numberOfFloors = arrayGenerator(20);

  const handleClick = (floor: number): void => {
    ElevatorControl.callElevator(floor, elevators, setElevators);
  };

  return (
    <Styled.FloorsContainer>
      {numberOfFloors.map(floorNUmber => (
        <div key={floorNUmber}>
          <Styled.Floors />
          <Styled.Button
            onClick={e => {
              e.preventDefault();
              handleClick(floorNUmber);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {floorNUmber}
          </Styled.Button>
        </div>
      ))}
    </Styled.FloorsContainer>
  );
};

export default Floors;
