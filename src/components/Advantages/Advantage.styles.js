import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 var(--spacing-md);
  margin: var(--spacing-3xl) 0;

  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-dark);
  margin-bottom: var(--spacing-xl);
  margin-top: 5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  justify-content: center;
  gap: var(--spacing-lg);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 220px);
  }
  @media (max-width: 480px) {
    grid-template-columns: 220px;
  }
`;

export const Card = styled.div`
  width: 220px;
  height: 260px;
  background: var(--color-white);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius-md);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`;

export const IconWrapper = styled.div`
  flex: 0 0 auto;
  height: 160px; /* altura de la zona blanca */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 140px;
    height: 120px;
    object-fit: contain;
  }
`;

export const TextWrapper = styled.div`
  flex: 1;
  background: var(--color-card-sub);
  padding: 0.75rem var(--spacing-md);
  color: var(--color-white);

  h4 {
    margin: 0;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: 1.2;
  }
  p {
    margin: var(--spacing-xs) 0 0;
    font-size: var(--font-size-base);
  }
`;