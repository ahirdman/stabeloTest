import styled from 'styled-components';

/**
 * Styled Containers
 */

export const Building = styled.section`
  display: flex;
  outline: 2px solid black;

  justify-content: space-evenly;
  position: relative;
  width: 50vw;

  @media screen and (max-width: 600px) {
    width: 75vw;
  }

  @media screen and (max-height: 800px) {
    top: 10vh;
  }
`;
