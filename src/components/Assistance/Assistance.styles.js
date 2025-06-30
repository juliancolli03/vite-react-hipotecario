// src/components/Assistance/Assistance.styles.js
import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 1rem;
  margin-bottom: 3rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const HighlightsRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const HighlightCard = styled.div.withConfig({
  shouldForwardProp: prop => !['bgColor', 'textColor'].includes(prop)
})`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  border-radius: 16px;
  padding: 1.5rem;
  font-family: 'Montserrat', sans-serif;

  .highlight-inner {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .highlight-icon {
    flex: 0 0 auto;
    height: 48px;
  }

  .highlight-content {
    flex: 1;

    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 0 0.5rem;
    }

    p {
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.3;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 0.3rem 0;
        font-size: 1rem;
      }
    }
  }
`;
export const ServicesContainer = styled.div`
  background-color: var(--color-card-sub-new); /* o '#00B2D4' */
  border-radius: 16px;
  padding: 2rem 1rem;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
`;

export const ServicesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ServicesLine = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 2rem;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-align: left;

  img {
    flex-shrink: 0;
  }

  .text {
    h4 {
      margin: 0 0 0.25rem;
      font-size: 1.1rem;
      font-weight: 600;
      color: #fff;
    }
    p {
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.4;
      color: #fff;
    }
  }
`;

/* Aquí integramos el estilo de tu tarjeta */
export const Card = styled.div`
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  font-family: 'Montserrat', sans-serif;

  img {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;
