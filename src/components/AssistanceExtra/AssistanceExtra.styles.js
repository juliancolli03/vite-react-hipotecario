import styled from 'styled-components';

export const Section = styled.section`
  background: var(--color-bg-extra-assistance);
  padding: var(--spacing-3xl) var(--spacing-md);
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const Container = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: var(--color-text-dark);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-sm);
`;

export const Subtitle = styled.p`
  color: var(--color-text-dark);
  font-size: var(--font-size-md);
  margin-bottom: 2.5rem;
`;

export const CardsRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
`;

export const Card = styled.div`
  flex: 1 1 180px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: var(--spacing-md);
`;

export const Label = styled.span`
  color: var(--color-text-dark);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
`;

export const ButtonWrapper = styled.div`
  margin-top: var(--spacing-md);
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 0.75rem var(--spacing-lg);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius-full);
  color: var(--color-primary);
  font-size: var(--font-size-md);
  text-decoration: none;
  transition: background var(--transition-fast);

  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
  }

  svg {
    font-size: 1.2rem;
  }
`;