import * as Utils from "./../utils";
import { IElevator } from "./elevator.interface";

const elevators: IElevator[] = [1, 2, 3, 4, 5].map(id => {
  return {
    id,
    floor: Utils.randomFloor(),
    isMoving: false,
    movingTo: undefined,

    callElevator(floor: number) {
      this.movingTo = floor;
      this.isMoving = true;

      setTimeout(() => {
        this.movingTo = undefined;
        this.isMoving = false;
        this.floor = floor;
      }, Math.abs(this.floor - floor) * 2000);
    },
  };
});

export const getAllElevators = (): IElevator[] => elevators;

export const sendElevator = (reqFloor: number) => {
  Utils.validateFloor(reqFloor, elevators);
  const elevatorToSend: IElevator = Utils.closestElevator(reqFloor, elevators);
  elevatorToSend.callElevator(reqFloor);

  return { id: elevatorToSend.id, floor: reqFloor };
};
