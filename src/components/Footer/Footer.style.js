import styled from 'styled-components';

export const colors = {
  primaryDark: '#1D4C7A',
  primaryLight: '#2FC5E2',
  white: '#fff'
};

export const FooterWrapper = styled.footer`
  background: ${colors.primaryDark};
  color: ${colors.white};
  padding: 3rem 1rem;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const ContactCol = styled.div`
  flex: 1;
  min-width: 240px;

  img.logo {
    height: 40px;
    margin-bottom: 1rem;
  }

  .phone {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${colors.primaryLight};
    margin-bottom: 0.25rem;
  }

  .schedule {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .socials {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    a img {
      width: 24px;
      height: 24px;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    a:hover img {
      opacity: 0.7;
    }
  }

  .copy {
    font-size: 0.85rem;
  }
`;

export const Column = styled.div`
  flex: 1;
  min-width: 180px;

  & + & {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    padding-left: 2rem;
  }
`;

export const SectionTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.white};
  margin-bottom: 1rem;
`;

export const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li + li {
    margin-top: 0.5rem;
  }

  a {
    font-size: 0.95rem;
    color: ${colors.white};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${colors.primaryLight};
    }
  }
`;
