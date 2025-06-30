import React from 'react';
import {
  FooterWrapper,
  Container,
  ContactCol
} from './Footer.style';
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

export default function Footer() {
  const { contact, sections } = footerData;

  return (
    <FooterWrapper>
      <Container>
        <ContactCol>
          <img
            className="logo"
            src={contact.logoSrc}
            alt="Hipotecario Seguros"
          />
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
