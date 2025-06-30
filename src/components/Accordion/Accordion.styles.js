import styled from 'styled-components';

export const StyledAccordion = styled.div`
  /* Estilos comunes */
  .toggle-text {
    display: none;
  }

  /* Modificaciones para la variante "questions-accordion" */
  &.questions-accordion {
    .accordion-item {
      border: none;
      border-bottom: 1px solid var(--color-border);
    }

    .accordion-button {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 1rem 0;
      font-size: 1.25rem;
      color: var(--color-text-dark);

      &::after {
        display: inline-block;
        color: var(--color-price-bg);
        font-size: 1rem;
      }
    }

    /* fuerza el display none en el toggle-text aunque venga de otro lugar */
    .toggle-text {
      display: none !important;
    }
  }
`;
