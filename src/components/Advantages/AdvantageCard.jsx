import PropTypes from 'prop-types';
import {
  Card,
  IconWrapper,
  TextWrapper
} from './Advantage.styles';

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
