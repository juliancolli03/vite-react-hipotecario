import { Section, Title, Grid } from './Advantage.styles';
import Accordion from '../Accordion/Accordion';
import { advantages, assistanceData } from '../../data/advantages';
import AdvantageCard from './AdvantageCard';

export default function AdvantagesSection() {
  const items = assistanceData.map(sec => ({
    id: sec.id,
    header: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <span>{sec.title}</span>
      </div>
    ),
    content: (
      <div style={{ padding: '0.75rem 1.5rem' }}>
        {sec.items.map((item, idx) =>
          typeof item === 'string' ? (
            <p key={idx}>{item}</p>
          ) : (
            <div key={idx}>
              {item.subtitle && <h5>{item.subtitle}</h5>}
              {item.description && <p>{item.description}</p>}
              {item.list && (
                <ul>
                  {item.list.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          )
        )}
      </div>
    )
  }));

  return (
    <Section>
      <div className="container">
        <Title>Contratá tu seguro 100% online, sin trámites</Title>

        <Grid>
          {advantages.map((adv, i) => (
            <AdvantageCard
              key={i}
              icon={adv.icon}
              title={adv.title}
              subtitle={adv.subtitle}
            />
          ))}
        </Grid>

        <Accordion
          items={items}
          parentId="assistanceAccordion"
          allowMultiple={false}
          className="mt-5"
          headerClass="rounded-pill d-flex align-items-center"
          headerStyle={{
            background: 'var(--color-price-bg)',
            color: '#fff',
            padding: '0.75rem 1.5rem'
          }}
          collapseClass="ps-4"
        />
      </div>
    </Section>
  );
}
