import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css.table}>
    <thead>
      <tr className={css.head}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody className={css.body}>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={css.strings} key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
