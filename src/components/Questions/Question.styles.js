import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 var(--spacing-md);
  background: var(--color-questions-bg);

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--spacing-2xl) 0;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);

  h2 {
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-price-bg);
    margin-bottom: var(--spacing-sm);
  }
  p {
    font-size: var(--font-size-md);
    color: var(--color-text-light);
  }
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #e0e0e0;

  .accordion-button {
    all: unset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: var(--spacing-md) 0;
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-price-bg);

    svg {
      color: var(--color-primary);
      font-size: var(--font-size-xl);
      transition: transform var(--transition-fast);
    }

    &.collapsed svg.ver-less {
      transform: rotate(180deg);
    }
  }

  .accordion-collapse {
    overflow: hidden;
    transition: max-height var(--transition-normal);
    &.collapse {
      max-height: 0;
    }
    &.collapsing {
      max-height: 0;
    }
    &.collapse.show {
      max-height: 1000px;
    }
  }

  .accordion-body {
    padding: var(--spacing-sm) 0 var(--spacing-md) 0;
    font-size: var(--font-size-md);
    color: var(--color-text-light);

    p {
      margin: 0 0 0.75rem 0;
      line-height: 1.4;
    }
    ul {
      margin: 0 0 0.75rem 1.25rem;
      li {
        margin-bottom: var(--spacing-sm);
        line-height: 1.4;
      }
    }

    h5 {
      margin: 0 0 var(--spacing-sm) 0;
      font-size: var(--font-size-md);
      font-weight: var(--font-weight-semibold);
      color: var(--color-price-bg);
    }
  }
`;