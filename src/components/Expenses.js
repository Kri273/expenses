import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  const { data } = props;

  return (
    <div className="expenses">
      {data.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      ))}
    </div>
  );
};

export default Expenses;

