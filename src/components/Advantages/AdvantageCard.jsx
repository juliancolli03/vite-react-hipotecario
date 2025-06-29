import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  /* Tamaño exacto */
  width: 220px;
  height: 260px;

  background: #fff;
  border: 2px solid var(--color-primary);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
`;

const IconWrapper = styled.div`
  /* Centrar el icono en la zona blanca */
  flex: 0 0 auto;
  height: 160px;        /* altura de la zona blanca */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }
`;

const TextWrapper = styled.div`
  /* Zona inferior turquesa */
  flex: 1;
  background: var(--color-card-sub);
  padding: 0.75rem 1rem;
  color: #fff;

  h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.2;
  }
  p {
    margin: 0.25rem 0 0;
    font-size: 0.95rem;
  }
`;

export default function AdvantageCard({ icon, title, subtitle }) {
  return (
    <Card>
      <IconWrapper>
        <img src={icon} alt={title} />
      </IconWrapper>
      <TextWrapper>
        <h4>{title}</h4>
        {subtitle && <p>{subtitle}</p>}
      </TextWrapper>
    </Card>
  );
}

AdvantageCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};
