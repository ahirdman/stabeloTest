import { IElevator } from '../elevators/elevator.interface';
import HttpException from './http-exception';

const closestFloorWithElevator = (
  floor: number,
  elevators: IElevator[]
): number =>
  elevators
    .filter((elevator: IElevator) => elevator.isMoving === false)
    .map((elevator: IElevator) => elevator.floor)
    .reduce((prev, curr) => {
      return Math.abs(curr - floor) < Math.abs(prev - floor) ? curr : prev;
    });

export const randomFloor = (): number => Math.floor(Math.random() * 20) + 1;

export const closestElevator = (
  floor: number,
  elevators: IElevator[]
): IElevator => {
  const closestFloor = closestFloorWithElevator(floor, elevators);
  return elevators.find(
    (elevator: IElevator) => elevator.floor === closestFloor
  );
};

export const validateFloor = (floor: number, elevators: IElevator[]): void => {
  if (elevators.find((elevator: IElevator) => elevator.movingTo === floor)) {
    throw new HttpException(400, 'Elevator already on the way.');
  }
  if (elevators.find((elevator: IElevator) => elevator.floor === floor)) {
    throw new HttpException(400, 'Elevator already on floor.');
  }
};
