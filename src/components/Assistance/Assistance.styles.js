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

export const HighlightCard = styled.div`
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

  .highlight-text {
    flex: 1;

    h3 {
      font-size: 1.75rem;
      font-weight: 600;
      margin: 0 0 0.75rem;
      line-height: 1.2;
    }

    ul {
      margin: 0 0 0.75rem;
      padding-left: 0;
      list-style-type: none;

      li {
        margin: 0.3rem 0;
        font-size: 1rem;
      }
    }

    p {
      margin: 0;
      font-size: 1rem;
    }
  }
`;

export const ServicesContainer = styled.div`
  background-color: var(--color-card-sub); /* o '#00B2D4' */
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

/* Nuevo styled-component para cada ítem de servicio */
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
