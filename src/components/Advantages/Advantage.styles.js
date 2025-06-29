import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 1rem;
  margin: 4rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  /* Fuerzo cuatro columnas fijas de 220px y centro el conjunto */
  grid-template-columns: repeat(4, 220px);
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 992px) {
    /* En pantallas medias pasamos a 2 columnas */
    grid-template-columns: repeat(2, 220px);
    justify-content: center;
  }
  @media (max-width: 480px) {
    /* En móviles, una sola columna */
    grid-template-columns: 220px;
    justify-content: center;
  }
`;
