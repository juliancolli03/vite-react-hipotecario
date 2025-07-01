import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: var(--color-price-bg);
  color: var(--color-white);
  padding: var(--spacing-2xl) var(--spacing-md);
`;

export const Container = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: flex;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
`;

export const ContactCol = styled.div`
  flex: 1;
  min-width: 240px;

  img.logo {
    height: 40px;
    margin-bottom: var(--spacing-md);
  }

  .phone {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-card-sub);
    margin-bottom: var(--spacing-xs);
  }

  .schedule {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-md);
  }

  .socials {
    display: flex;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);

    a img {
      width: 24px;
      height: 24px;
      cursor: pointer;
      transition: opacity var(--transition-fast);
    }

    a:hover img {
      opacity: 0.7;
    }
  }

  .copy {
    font-size: var(--font-size-sm);
  }
`;

export const Column = styled.div`
  flex: 1;
  min-width: 180px;

  & + & {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    padding-left: var(--spacing-xl);
  }
`;

export const SectionTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  margin-bottom: var(--spacing-md);
`;

export const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li + li {
    margin-top: var(--spacing-sm);
  }

  a {
    font-size: var(--font-size-base);
    color: var(--color-white);
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-card-sub);
    }
  }
`;