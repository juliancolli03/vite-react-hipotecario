import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 1rem;
  background: #f7f9fa;

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 0;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #1d4c7a;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    color: #555;
  }
`;

export const AccordionItem = styled.div`
  /* línea divisoria entre items */
  border-bottom: 1px solid #e0e0e0;

  /* el botón (header) */
  .accordion-button {
    all: unset;                         
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: 600;
    color: #1d4c7a;

    /* flecha chevron a la derecha */
    svg {
      color: #00B2D4;
      font-size: 1.25rem;
      transition: transform 0.2s ease;
    }

    &.collapsed svg.ver-less {
      transform: rotate(180deg);
    }
  }

  /* panel de contenido */
  .accordion-collapse {
    overflow: hidden;
    transition: max-height 0.3s ease;
    &.collapse {
      max-height: 0;
    }
    &.collapsing {
      max-height: 0;
    }
    &.collapse.show {
      max-height: 1000px; /* suficientemente grande */
    }
  }

  .accordion-body {
    padding: 0.5rem 0 1rem 0;
    font-size: 1rem;
    color: #555;

    /* si son parráfos o listas */
    p {
      margin: 0 0 0.75rem 0;
      line-height: 1.4;
    }
    ul {
      margin: 0 0 0.75rem 1.25rem;
      li {
        margin-bottom: 0.5rem;
        line-height: 1.4;
      }
    }

    /* subtítulos dentro del body */
    h5 {
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
      font-weight: 600;
      color: #1d4c7a;
    }
  }
`;
