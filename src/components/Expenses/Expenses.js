import { useState } from "react";
import Card from '../UI/Card';
import {ExpenseList} from './ExpensesList';
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props){

	const [filteredYear, setFilteredYear]=useState('2022');

	const filteredExpenses= props.expenses.filter(expense=> {
		return expense.date.getFullYear().toString()===filteredYear;
	});

	const filterSaveHandler =selectedYear =>{
		setFilteredYear(selectedYear);
	};

	return (
		<Card className='expenses'>
			<ExpenseFilter selected={filteredYear} onSaveSelection={filterSaveHandler} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpenseList expenses={filteredExpenses}/>
		</Card>
	);
}

export default Expenses;