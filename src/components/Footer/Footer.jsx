import React from 'react';
import styled from 'styled-components';
import { footerData } from '../../data/footer';
import FooterItem from './FooterItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faInstagram, faYoutube, faLinkedin);

const { contact, sections } = footerData;

const colors = {
  primaryDark: '#1D4C7A',
  primaryLight: '#2FC5E2',
  white: '#fff'
};

const FooterWrapper = styled.footer`
  background: ${colors.primaryDark};
  color: ${colors.white};
  padding: 3rem 1rem;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;
const ContactCol = styled.div`
  flex: 1;
  min-width: 240px;
  img.logo { height: 40px; margin-bottom: 1rem; }
  .phone { font-size: 1.5rem; font-weight: 600; color: ${colors.primaryLight}; margin-bottom: .25rem; }
  .schedule { font-size: .95rem; margin-bottom: 1rem; }
  .socials { display: flex; gap: 1rem; margin-bottom: 1rem;
    a { color: ${colors.white}; font-size: 1.25rem; transition: color .2s;
      &:hover { color: ${colors.primaryLight}; }
    }
  }
  .copy { font-size: .85rem; }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ContactCol>
          <img className="logo" src={contact.logoSrc} alt="Hipotecario Seguros" />
          <div className="phone">{contact.phone}</div>
          <div className="schedule">{contact.schedule}</div>
          <div className="socials">
            {contact.socials.map((s, i) => {
              // extraemos “facebook” de “fa fa-lg fa-facebook”
              const iconName = s.icon.split('fa-').pop();
              return (
                <a key={i} href={s.href} aria-label={s.name}>
                  <FontAwesomeIcon icon={['fab', iconName]} />
                </a>
              );
            })}
          </div>
          <div className="copy">{contact.copyright}</div>
        </ContactCol>
        {sections.map((sec, i) => (
          <FooterItem key={i} title={sec.title} links={sec.links} />
        ))}
      </Container>
    </FooterWrapper>
  );
}
