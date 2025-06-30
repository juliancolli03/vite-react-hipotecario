import React from 'react';
import PropTypes from 'prop-types';
import {
  Column,
  SectionTitle,
  LinkList
} from './Footer.style';

export default function FooterItem({ title, links }) {
  return (
    <Column>
      <SectionTitle>{title}</SectionTitle>
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

FooterItem.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
};
