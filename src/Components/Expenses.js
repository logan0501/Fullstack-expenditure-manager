import "./Expenses.css";

import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
function Expenses(props){
    
    const [filterYear,setFilteredYear]=useState('2020');

    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }

    const filterdExpenses = props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filterYear;
    });
   
    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses = {filterdExpenses}/>
            <ExpenseList items={filterdExpenses}/>
            
           
        </Card>
    )
}

export default Expenses;