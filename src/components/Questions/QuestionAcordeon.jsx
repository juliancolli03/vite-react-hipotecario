import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { AccordionItem } from './Question.styles';

export default function QuestionAcordeon({ id, title, items }) {
  return (
    <AccordionItem className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded="false"
          aria-controls={`collapse-${id}`}
        >
          <span>{title}</span>
          <span className="ms-auto d-flex align-items-center">
            <FontAwesomeIcon icon={faChevronRight} className="ver-more" />
            <FontAwesomeIcon icon={faChevronDown} className="ver-less d-none" />
          </span>
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${id}`}
        data-bs-parent="#questionsAccordion"  
      >
        <div className="accordion-body">
          {items.map((item, idx) => {
            if (typeof item === 'string') {
              return <p key={idx}>{item}</p>;
            }
            const { subtitle, description, list } = item;
            return (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                {subtitle && <h5 style={{ margin: '0 0 .5rem' }}>{subtitle}</h5>}
                {description && <p style={{ margin: '0 0 .5rem' }}>{description}</p>}
                {list && (
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {list.map((li, j) => <li key={j}>{li}</li>)}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </AccordionItem>
  );
}
