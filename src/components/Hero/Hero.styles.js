// src/components/Hero/Hero.styles.js
import styled from 'styled-components';
export const colors = {
  primary: '#00B2D4',
  priceBg: '#1D4C7A',
  cardSub: '#2FC5E2',
  textDark: '#005467',
  textLight: '#555555',
  bgLight: '#F7F7F7',
  border: '#D9D9D9'
};

// — Hero styles —

export const Section = styled.section`
  padding: 0 1rem;
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
    padding: 3rem 0;

    @media (max-width: 992px) {
      flex-direction: column;
      padding: 2rem 0;
    }
  }
`;

export const Left = styled.div`
  width: 300px;
  margin-right: 2rem;

  @media (max-width: 992px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

export const Right = styled.div`
  flex: 1;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  color: ${colors.primary};
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 1rem;

  img {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: ${colors.textLight};
  margin-bottom: 2.5rem;
`;

export const CardWrapper = styled.div`
  background: ${colors.bgLight};
  border-radius: 16px;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
`;

export const CardHeader = styled.div`
  background: ${colors.primary};
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  font-weight: 600;
`;

export const PriceBlock = styled.div`
  background: ${colors.priceBg};
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;

  h2 {
    font-size: 2.5rem;
    margin: 0;
  }
  small {
    font-size: 1rem;
  }
`;

export const SubtitleBlock = styled.div`
  background: ${colors.cardSub};
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: ${colors.textDark};

    svg {
      color: #8DC63F;
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }
  }
`;

export const InfoWrapper = styled.span`
  position: relative;
  display: inline-block;
  margin-left: 0.5rem;

  svg {
    color: ${colors.primary};
    cursor: help;
    font-size: 1rem;
  }

  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: -0.5rem;
  left: 1.5rem;
  background: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  font-size: 0.85rem;
  color: ${colors.textDark};
  width: 200px;
  line-height: 1.2;
  opacity: 0;
  visibility: hidden;
  z-index: 10;
`;

export const CriticalList = styled.ul`
  list-style: none;
  padding: 0 1rem 1rem;
  margin: 0;

  &::before {
    content: '${props => props.footerLabel || ""}';
    display: block;
    text-align: right;
    font-size: 0.9rem;
    color: ${colors.textLight};
    margin-bottom: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    color: ${colors.textDark};

    span {
      display: flex;
      align-items: center;
    }

    strong {
      font-weight: 600;
    }
  }
`;

// — FormHero styles —

export const FormWrapper = styled.div`
  background: ${colors.bgLight};
  border-radius: 16px;
  padding: 2rem;
  font-family: 'Montserrat', sans-serif;
  margin-top: 0;

  @media (max-width: 992px) {
    padding: 1.5rem;
  }
`;

export const FormTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;

  & > div {
    flex: 1;
    min-width: 150px;
  }
`;

export const FieldWrapper = styled.div``;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: ${colors.textLight};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.95rem;
`;

export const SimulateButton = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 1.5rem auto 0;
  padding: 0.75rem;
  background: ${colors.primary};
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const RequiredNote = styled.div`
  font-size: 0.85rem;
  color: ${colors.textLight};
  text-align: right;
  margin-top: 0.5rem;
`;
