import PropTypes from 'prop-types';
import { ServiceItem } from './Assistance.styles';

export default function AssistanceItem({ icon, title, desc }) {
  return (
    <ServiceItem>
      <img src={icon} alt={title} />
      <div className="text">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </ServiceItem>
  );
}

AssistanceItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
