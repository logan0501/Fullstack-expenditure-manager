import React from "react"

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props)=>{

    const ExpenseHandler = (entereddata)=>{
        const expenseData ={
            ...entereddata,
            id: Math.random().toString()
        };
        props.onSaveData(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={ExpenseHandler} />
        </div>
    )
};

export default NewExpense;