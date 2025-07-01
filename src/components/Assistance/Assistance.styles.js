import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 var(--spacing-md);
  margin-bottom: var(--spacing-2xl);

  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
  }
`;

export const HighlightsRow = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);

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
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  font-family: 'Montserrat', sans-serif;

  .highlight-inner {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
  }

  .highlight-icon {
    flex: 0 0 auto;
    height: 48px;
  }

  .highlight-text {
    flex: 1;
    p {
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.3;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    ul li {
      margin: 0.3rem 0;
      font-size: var(--font-size-md);
    }
  }
`;

export const ServicesContainer = styled.div`
  background-color: var(--color-card-sub-new);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-xl) var(--spacing-md);
  color: var(--color-white);
  font-family: 'Montserrat', sans-serif;
`;

export const ServicesTitle = styled.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  margin-bottom: var(--spacing-md);
`;

export const ServicesLine = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: var(--spacing-xl);
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);

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
  gap: var(--spacing-md);
  text-align: left;

  img {
    flex-shrink: 0;
  }

  .text {
    h4 {
      margin: 0 0 var(--spacing-xs);
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-white);
    }
    p {
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.4;
      color: var(--color-white);
    }
  }
`;

export const Card = styled.div`
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  color: var(--color-white);
  font-family: 'Montserrat', sans-serif;

  img {
    width: 48px;
    height: 48px;
    margin-bottom: var(--spacing-md);
  }

  h4 {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    margin: 0 0 var(--spacing-sm);
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;