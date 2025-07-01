import styled from 'styled-components';

export const StyledAccordion = styled.div`
  .toggle-text {
    display: none;
  }

  &.questions-accordion {
    .accordion-item {
      border: none;
      border-bottom: 1px solid var(--color-border);
    }

    .accordion-button {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: var(--spacing-md) 0;
      font-size: var(--font-size-xl);
      color: var(--color-text-dark);

      &::after {
        display: inline-block;
        color: var(--color-price-bg);
        font-size: var(--font-size-md);
      }
    }

    .toggle-text {
      display: none !important;
    }
  }
`;