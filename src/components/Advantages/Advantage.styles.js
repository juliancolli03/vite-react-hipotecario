import styled from 'styled-components';

/* Contenedor de toda la sección */
export const Section = styled.section`
  padding: 0 1rem;
  margin: 4rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
`;

/* Título de la sección */
export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 2rem;
  margin-top:5rem;
`;

/* Grid de las tarjetas */
export const Grid = styled.div`
  display: grid;
  /* Cuatro columnas fijas de 220px centradas */
  grid-template-columns: repeat(4, 220px);
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 220px);
  }
  @media (max-width: 480px) {
    grid-template-columns: 220px;
  }
`;

/* Tarjeta individual */
export const Card = styled.div`
  width: 220px;
  height: 260px;
  background: #fff;
  border: 2px solid var(--color-primary);
  border-radius: 16px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`;

/* Wrapper del icono */
export const IconWrapper = styled.div`
  flex: 0 0 auto;
  height: 160px; /* altura de la zona blanca */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }
`;

/* Wrapper del texto */
export const TextWrapper = styled.div`
  flex: 1;
  background: var(--color-card-sub);
  padding: 0.75rem 1rem;
  color: #fff;

  h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.2;
  }
  p {
    margin: 0.25rem 0 0;
    font-size: 0.95rem;
  }
`;
