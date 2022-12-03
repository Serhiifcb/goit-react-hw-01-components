import PropTypes from 'prop-types'
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.statisticsTitle}>{title ? title : ""}</h2>

      <ul className={css.statisticsList}>
        {stats.map(stat => (
          <li className={css.statisticsItem} key={stat.id}>
          <span className={css.statisticsItemLabel}>{stat.label} <br /></span>
          <span className={css.statisticsItemPercent}>{stat.percentage}%</span>
        </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};