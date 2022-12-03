import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionsTable}>
      <thead>
        <tr>
          <th className={css.transactionsHeader}>Type</th>
          <th className={css.transactionsHeader}>Amount</th>
          <th className={css.transactionsHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.transactionsLine}>
            <td className={css.transactions}>{item.type}</td>
            <td className={css.transactions}>{item.amount}</td>
            <td className={css.transactions}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
}