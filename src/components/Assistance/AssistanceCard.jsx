import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  font-family: 'Montserrat', sans-serif;

  img {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;

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
