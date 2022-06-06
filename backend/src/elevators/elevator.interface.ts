export interface IElevator {
  id: number;
  floor: number;
  isMoving: boolean;
  movingTo: number | null;
  callElevator: (floors: number) => void;
}
