import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
	const[EnteredTitle, setEnteredTitle]=useState('');
	const[EnteredAmount, setEnteredAmount]=useState('');
	const[EnteredDate, setEnteredDate]=useState('');


//const[userInput,setUserInput]=useState({
// 	enterTitle:'',
// 	enterAmount:'',
// 	enterDate:'',
// })

const titleChangeHandler=(event)=>{
	setEnteredTitle(event.target.value);
	// 2nd method
	// setUserInput({
	// 	...userInput,
	// 	enterTitle:event.target.value			//React schedules the state change so maybe in some cases this code will not give latest value
	// })
	
	// 3rd method
	// setUserInput((prevState)=>{
	// 	return {...prevState,enterTitle:event.target.value};		//this code will give the latest state
	// });
}

const amountChangeHandler=(event)=>{
	setEnteredAmount(event.target.value);
}

const dateChangeHandler=(event)=>{
	setEnteredDate(event.target.value);
}

const submitHandler=(event)=>{
	event.preventDefault();

	const expenseDate={
		title:EnteredTitle,
		amount:+EnteredAmount,
		date:new Date(EnteredDate)
	};

	props.onSaveExpenseData(expenseDate);
	setEnteredAmount('');
	setEnteredDate('');
	setEnteredTitle('');
};

	return <form onSubmit={submitHandler}>
		<div className='new-expense__controls'>
			<div className='new-expense__control'>
				<label>Title</label>
				<input type='text'
				value={EnteredTitle}
				onChange={titleChangeHandler}></input>
			</div>
			<div className='new-expense__control'>
			<label>Amount</label>
				<input type="number" min='0.1' step='0.1'
				value={EnteredAmount}
				onChange={amountChangeHandler}></input>
			</div>
			<div className='new-expense__control'>
			<label>Date</label>
				<input type="date" min='2019-01-01' max='2022-12-31'
				value={EnteredDate}
				onChange={dateChangeHandler}></input>
			</div>
			</div>
			<div className="new-expense__actions">
				<button type='button' onClick={props.onCancel}>Cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		
	</form>
 
}

export default ExpenseForm;