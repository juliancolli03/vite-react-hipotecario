import React from 'react';
import {
  Section,
  HighlightsRow,
  HighlightCard,
  ServicesContainer,
  ServicesTitle,
  ServicesLine,
  ServiceGrid
} from './Assistance.styles';
import { highlights, services } from '../../data/assistance';
import AssistanceCard from './AssistanceCard';
import AssistanceItem from './AssistanceItem'
export default function AssistanceSection() {
  return (
    <Section>
      <div className="container">
        <HighlightsRow>
          {highlights.map((h, idx) => (
            <HighlightCard
              key={idx}
              bgColor={h.bgColor}
              textColor={h.textColor}
            >
              <div className="highlight-inner">
                <div className="highlight-icon">
                  <img src={h.icon} alt="" />
                </div>
                <div className="highlight-text">
                  <h3>{h.title}</h3>
                  {h.bullets && (
                    <ul>
                      {h.bullets.map(b => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {h.subtitle && <p>{h.subtitle}</p>}
                </div>
              </div>
            </HighlightCard>
          ))}
        </HighlightsRow>

  <ServicesContainer>
          <ServicesTitle>Asistencias para tu tranquilidad</ServicesTitle>
          <ServicesLine />
          <ServiceGrid>
            {services.map((s, idx) => (
              <AssistanceItem
                key={idx}
                icon={s.icon}
                title={s.title}
                desc={s.desc}
              />
            ))}
          </ServiceGrid>
        </ServicesContainer>    </div>
    </Section>
  );
}
