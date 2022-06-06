export interface IElevator {
  id: number;
  floor: number;
  isMoving: boolean;
  movingTo: number | undefined;
  callElevator: (floors: number) => void;
}
