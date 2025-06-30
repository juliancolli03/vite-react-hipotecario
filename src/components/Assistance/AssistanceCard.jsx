// src/components/Assistance/AssistanceCard.jsx
import PropTypes from 'prop-types';
import { Card } from './Assistance.styles';

export default function AssistanceCard({ icon, title, desc }) {
  return (
    <Card>
      <img src={icon} alt={title} />
      <h4>{title}</h4>
      <p>{desc}</p>
    </Card>
  );
}

AssistanceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};
