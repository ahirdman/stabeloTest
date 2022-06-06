import { motion } from 'framer-motion';
import styled from 'styled-components';
import * as svg from './svg';

/**
 * Styled Containers
 */

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Spinner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  top: 15px;
  height: 35px;
  z-index: 0;
`;

export const ElevatorShaft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  height: 700px;
  width: 50px;

  outline: 2px solid black;
  background-color: #e9f2ea;
  z-index: 1;
`;

export const Elevator = styled(motion.div)`
  position: relative;
  bottom: 0;

  width: 80%;
  height: 35px;

  border: 2px solid black;
  border-radius: 5px;
`;

export const SteelWire = styled(motion.div)`
  height: 0px;
  width: 1px;
  border: 1px solid black;

  position: relative;
  top: -665px;
`;

/**
 * Styled SVG
 */

export const Gear = styled(svg.Gear)``;
