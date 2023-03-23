import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatList,
  getRandomHexColor,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <h2 className="title">{title}</h2>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="item"
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
