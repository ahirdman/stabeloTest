import express, { NextFunction, Request, Response } from "express";

import * as ElevatorService from "./elevators.service";

export const elevatorRouter = express.Router();

elevatorRouter.get("/", (_req: Request, res: Response, next: NextFunction) => {
  try {
    const elevators = ElevatorService.getAllElevators();
    res.status(200).json(elevators);
  } catch (error) {
    next(error);
  }
});

elevatorRouter.put(
  "/:floor",
  ({ params: { floor } }, res: Response, next: NextFunction) => {
    const floorNumber: number = parseInt(floor, 10);

    try {
      const elevator = ElevatorService.sendElevator(floorNumber);
      res.status(200).json(elevator);
    } catch (error) {
      next(error);
    }
  }
);
