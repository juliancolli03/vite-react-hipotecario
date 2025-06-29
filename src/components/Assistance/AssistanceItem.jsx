import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-align: left;

  img {
    flex-shrink: 0;
  }

  .text {
    h4 {
      margin: 0 0 0.25rem;
      font-size: 1.1rem;
      font-weight: 600;
      color: #fff;
    }
    p {
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.4;
      color: #fff;
    }
  }
`;

export default function AssistanceItem({ icon, title, desc }) {
  return (
    <Item>
      <img src={icon} alt={title} />
      <div className="text">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </Item>
  );
}

AssistanceItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
