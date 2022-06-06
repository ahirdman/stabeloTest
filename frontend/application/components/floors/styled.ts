import { motion } from 'framer-motion';
import styled from 'styled-components';

/**
 * Styled Containers
 */

export const Floors = styled.div`
  height: 35px;
  border-bottom: 1px solid grey;
`;

export const FloorsContainer = styled.div`
  position: absolute;
  width: 100%;
`;

export const Button = styled(motion.button)`
  position: absolute;
  left: -40px;
  width: 30px;
  height: 30px;
  margin-top: 2.5px;

  background: none;
  border: 2px solid black;
  border-radius: 50%;
`;
