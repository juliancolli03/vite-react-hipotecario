import styled from 'styled-components';
import { colors } from './Footer.style';

const Column = styled.div`
  flex: 1;
  & + & {
    border-left: 1px solid rgba(255,255,255,0.3);
    padding-left: 2rem;
  }
`;

const Title = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.white};
  margin-bottom: 1rem;
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li + li { margin-top: 0.5rem; }
  a {
    font-size: 0.95rem;
    color: ${colors.white};
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: ${colors.primaryLight}; }
  }
`;

export default function FooterItem({ title, links }) {
  return (
    <Column>
      <Title>{title}</Title>
      <LinkList>
        {links.map((l, i) => (
          <li key={i}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </LinkList>
    </Column>
  );
}
