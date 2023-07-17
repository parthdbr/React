import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';



function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2023');

  let filterInfoText = '2020, 2021, 2022 & 2024';

  if(filteredYear == '2020') {
    filterInfoText = '2021, 2022, 2023 & 2024';
  }else if(filteredYear === '2021') {
    filterInfoText = '2020, 2022, 2023 & 2024';
  }else if(filteredYear === '2022') {
    filterInfoText = '2020, 2021, 2023 & 2024';
  }else{
    filterInfoText = '2020, 2021, 2022 & 2023';
  }

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;