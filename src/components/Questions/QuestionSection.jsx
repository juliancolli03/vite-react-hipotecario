import Accordion from '../Accordion/Accordion';
import { Section, Header } from './Question.styles';
import { questionsData } from '../../data/questions';

export default function QuestionSection() {
  const items = questionsData.map(({ id, title, items }) => ({
    id,
    header: title,
    content: (
      <>
        {items.map((it, i) =>
          typeof it === 'string' ? (
            <p key={i}>{it}</p>
          ) : (
            <div key={i} style={{ margin: '0 0 1rem' }}>
              {it.subtitle && <h5 style={{ margin: '0 0 .5rem' }}>{it.subtitle}</h5>}
              {it.description && <p style={{ margin: '0 0 .5rem' }}>{it.description}</p>}
              {it.list && (
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  {it.list.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          )
        )}
      </>
    )
  }));

  return (
    <Section>
      <div className="container">
        <Header>
          <h2>Preguntas Frecuentes</h2>
          <p>¿Te quedaron preguntas sobre el seguro de salud?</p>
        </Header>

        <Accordion
          items={items}
          parentId="questionsAccordion"
          allowMultiple={false}
          className="questions-accordion mt-4"
        />
      </div>
    </Section>
  );
}
