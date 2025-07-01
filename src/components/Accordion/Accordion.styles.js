import styled from 'styled-components';

export const StyledAccordion = styled.div`
  .accordion-item {
    border: 0px;
  }

  .accordion-button {
    background: #4A6FA5;
    color: white;
    border: none;
    border-radius: 25px !important;
    padding: 20px 30px;
    font-size: 1.1rem;
    font-weight: 500;
    box-shadow: none;
    
    &:not(.collapsed) {
      background: #4A6FA5;
      color: white;
      box-shadow: none;
      border-radius: 25px 25px 0 0 !important;
    }
    
    &:focus {
      box-shadow: none;
      border: none;
    }
    
    &::after {
      display: none;
    }
    
    .header-content {
      flex: 1;
    }
    
    .toggle-container {
      display: flex;
      align-items: center;
    }
    
    .toggle-text {
      color: white;
      font-size: 0.95rem;
      font-weight: 400;
    }
    
    .toggle-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &.questions-accordion {
    .accordion-item {
      border: none;
      border-bottom: 1px solid var(--color-border);
      background: transparent;
      border-radius: 0;
    }

    .accordion-button {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: var(--spacing-md) 0;
      font-size: var(--font-size-xl);
      color: var(--color-text-dark);

      &::after {
        display: none;
      }
    }

    .toggle-text {
      display: none !important;
    }
  }
`;