import styled from 'styled-components';

export const Section = styled.section`
  background: var(--color-bg-extra-assistance);
  padding: 4rem 1rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: var(--color-text-dark);
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: var(--color-text-dark);
  font-size: 1rem;
  margin-bottom: 2.5rem;
`;

export const CardsRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const Card = styled.div`
  flex: 1 1 180px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
`;

export const Label = styled.span`
  color: var(--color-text-dark);
  font-size: 0.95rem;
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--color-primary);
  border-radius: 50px;
  color: var(--color-primary);
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: var(--color-primary);
    color: #fff;
  }

  svg {
    font-size: 1.2rem;
  }
`;
