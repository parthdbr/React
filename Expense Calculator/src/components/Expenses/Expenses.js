import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';



function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2023');

  // let filterInfoText = '2020, 2021, 2022 & 2024';

  // if(filteredYear == '2020') {
  //   filterInfoText = '2021, 2022, 2023 & 2024';
  // }else if(filteredYear === '2021') {
  //   filterInfoText = '2020, 2022, 2023 & 2024';
  // }else if(filteredYear === '2022') {
  //   filterInfoText = '2020, 2021, 2023 & 2024';
  // }else{
  //   filterInfoText = '2020, 2021, 2022 & 2023';
  // }

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      {/* {props.items.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} />
      ))} */}
      {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}

export default Expenses;