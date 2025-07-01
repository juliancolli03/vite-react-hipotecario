import { useEffect } from 'react';
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
        const toggleText = btn.querySelector('.toggle-text');
        if (toggleText) toggleText.textContent = 'Ver menos';
        btn.setAttribute('aria-expanded', 'true');
      };

      const onHide = () => {
        const toggleText = btn.querySelector('.toggle-text');
        if (toggleText) toggleText.textContent = 'Ver más';
        btn.setAttribute('aria-expanded', 'false');
      };

      collapseEl.addEventListener('show.bs.collapse', onShow);
      collapseEl.addEventListener('hide.bs.collapse', onHide);

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
              <span className="ms-auto d-flex align-items-center toggle-container">
                <span className="toggle-text">Ver más</span>
                <span className="toggle-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
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