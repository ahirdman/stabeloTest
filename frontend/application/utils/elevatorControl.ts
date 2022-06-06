import { IElevator } from './interface';
import { API } from './../config/server';

const updateElevetors = (state: IElevator[], newFloor: IElevator) =>
  state.map((elevator: IElevator) =>
    elevator.id === newFloor.id ? newFloor : elevator
  );

export const getElevators = async (callback: (data: IElevator[]) => void) => {
  const data = await fetch(API);
  const res = await data.json();
  callback(res);
};

export const callElevator = async (
  floor: number,
  state: IElevator[],
  callback: (data: IElevator[]) => void
) => {
  const data = await fetch(`${API}/${floor}`, {
    method: 'PUT',
  });
  const res = await data.json();
  const updatedState = updateElevetors(state, res);
  callback(updatedState);
};
