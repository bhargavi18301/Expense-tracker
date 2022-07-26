import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES =[
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount:72 ,
        date: new Date(2020,5,23)
    },
    {
        id: 'e2',
        title: 'New Tv',
        amount: 10000,
        date: new Date(2021,12,16)
    },
    {
        id: 'e3',
        title: 'Party',
        amount: 2000,
        date: new Date(2019,3,18)
    },
    {
        id: 'e4',
        title: 'HP Collection',
        amount: 1200,
        date: new Date(2021,7,1)
    },
];

function App() {

    const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

    const addExpenseHandler= expense =>{
        setExpenses((prevExpenses) =>{
            return [expense,...prevExpenses]
        });
    };

    return(
        <div>
            <div style={{color:"white", textAlign:"center"}}>
                <h1>WELCOME TO YOUR EXPENSE TRACKER!!</h1>
                <h3>track all your expenses here at one place</h3>
            </div>
        
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses} />
        </div>
        </div>
    )
}

export default App;