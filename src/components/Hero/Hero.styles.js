import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 var(--spacing-md);
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--container-max-width);
    padding: var(--spacing-2xl) 0;

    @media (max-width: 992px) {
      flex-direction: column;
      padding: var(--spacing-xl) 0;
    }
  }
`;

export const Left = styled.div`
  width: 335px;
  margin-right: var(--spacing-xl);

  @media (max-width: 992px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: var(--spacing-xl);
  }
`;

export const Right = styled.div`
  flex: 1;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);

  img {
    width: 24px;
    height: 24px;
    margin-right: var(--spacing-sm);
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-dark);
  margin-bottom: var(--spacing-md);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

export const Subtitle = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-5xl);
`;

export const CardWrapper = styled.div`
  background: var(--color-bg-light);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`;

export const CardHeader = styled.div`
  background: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  padding: var(--spacing-md) 0;
  font-weight: var(--font-weight-semibold);
`;

export const PriceBlock = styled.div`
  background: var(--color-price-bg);
  color: var(--color-white);
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-md);

  h2 {
    font-size: var(--font-size-5xl);
    margin: 0;
  }
  small {
    font-size: var(--font-size-md);
  }
`;

export const SubtitleBlock = styled.div`
  background: var(--color-card-sub);
  padding: var(--spacing-md);
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: var(--spacing-md);
  margin: 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: var(--font-size-base);
    color: var(--color-text-dark);

    svg {
      color: var(--color-success);
      margin-right: var(--spacing-sm);
      font-size: 1.2rem;
    }
  }
`;

export const InfoWrapper = styled.span`
  position: relative;
  display: inline-block;
  margin-left: var(--spacing-sm);

  svg {
    color: var(--color-primary);
    cursor: pointer;
    font-size: var(--font-size-md);
  }

  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);

  width: 160px;      
  aspect-ratio: 1;      
  overflow: auto;     

  background: var(--color-white);
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-lg);

  font-size: var(--font-size-xs);
  line-height: 1.3;
  color: var(--color-text-dark);
  text-align: center;

  opacity: 0;
  visibility: hidden;
  z-index: var(--z-tooltip);
  transition: opacity var(--transition-fast), visibility var(--transition-fast);

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px 6px 0 6px;
    border-style: solid;
    border-color: var(--color-white) transparent transparent transparent;
  }
`;

export const CriticalList = styled.ul.withConfig({
  shouldForwardProp: prop => prop !== 'footerLabel'
})`
  list-style: none;
  padding: 0 var(--spacing-md) var(--spacing-md);
  margin: 0;

  &::before {
    content: '${props => props.footerLabel || ""}';
    display: block;
    text-align: right;
    font-size: 0.9rem;
    color: var(--color-text-light);
    margin-bottom: var(--spacing-sm);
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--spacing-sm);
    font-size: var(--font-size-base);
    color: var(--color-text-dark);

    span {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
    }
  }
`;

export const FormWrapper = styled.div`
  border-radius: var(--border-radius-md);
  margin-top: 0;
  background-color: var(--color-bg-light) !important;
  
  @media (max-width: 992px) {
    padding: var(--spacing-lg);
  }
`;

export const FormTitle = styled.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-dark);
  margin-bottom: var(--spacing-lg);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);

  & > div {
    flex: 1;
    min-width: 150px;
  }
`;

export const FieldWrapper = styled.div``;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-light);
`;

export const Input = styled.input`
  width: 100%;
  padding: var(--spacing-sm) 0;
  border: none;
  border-bottom: 1px solid var(--color-border);
  background: transparent;
  border-radius: 0;
  transition: border-color var(--transition-fast);

  &:focus {
    outline: none;
    border-bottom-color: var(--color-primary);
  }
`;

export const SimulateButton = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: var(--spacing-lg) auto 0;
  padding: 0.75rem;
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const RequiredNote = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  text-align: right;
  margin-top: var(--spacing-sm);
`;