import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledAccordion } from './Accordion.styles';

export default function Accordion({
  items,
  parentId,
  allowMultiple = false,
  className = '',
  headerClass = '',
  headerStyle = {},
  collapseClass = ''
}) {
  useEffect(() => {
    items.forEach(({ id }) => {
      const collapseEl = document.getElementById(`collapse-${id}`);
      const btn = document.querySelector(`[data-bs-target="#collapse-${id}"]`);
      if (!collapseEl || !btn) return;

      const onShow = () => {
        btn.querySelector('.toggle-open')?.classList.add('d-none');
        btn.querySelector('.toggle-close')?.classList.remove('d-none');
      };
      const onHide = () => {
        btn.querySelector('.toggle-open')?.classList.remove('d-none');
        btn.querySelector('.toggle-close')?.classList.add('d-none');
      };

      collapseEl.addEventListener('show.bs.collapse', onShow);
      collapseEl.addEventListener('hide.bs.collapse', onHide);

      // cleanup for this listener
      return () => {
        collapseEl.removeEventListener('show.bs.collapse', onShow);
        collapseEl.removeEventListener('hide.bs.collapse', onHide);
      };
    });
  }, [items]);

  return (
    <StyledAccordion className={`accordion ${className}`} id={parentId}>
      {items.map(({ id, header, content }) => (
        <div className="accordion-item mb-3" key={id}>
          <h2 className="accordion-header" id={`heading-${id}`}>
            <button
              className={`accordion-button collapsed ${headerClass}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${id}`}
              aria-expanded="false"
              aria-controls={`collapse-${id}`}
              style={headerStyle}
            >
              <span className="header-content">{header}</span>
              <span className="ms-auto d-flex align-items-center toggle-text">
                <span className="toggle-open">Ver más</span>
                <span className="toggle-close d-none">Ver menos</span>
              </span>
            </button>
          </h2>
          <div
            id={`collapse-${id}`}
            className={`accordion-collapse collapse ${collapseClass}`}
            aria-labelledby={`heading-${id}`}
            data-bs-parent={
              !allowMultiple && parentId ? `#${parentId}` : undefined
            }
          >
            <div className="accordion-body">{content}</div>
          </div>
        </div>
      ))}
    </StyledAccordion>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      header: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  parentId: PropTypes.string,
  allowMultiple: PropTypes.bool,
  className: PropTypes.string,
  headerClass: PropTypes.string,
  headerStyle: PropTypes.object,
  collapseClass: PropTypes.string
};
