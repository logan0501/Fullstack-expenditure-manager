import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props)=>{
    const [userInput,setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
    });

    const changeHandler=(event)=>{
        const {name,value} = event.target;
        setUserInput((prevState)=>{
            return {...prevState,[name]:value};
        });
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setUserInput({
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:'',
        });
    } 

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input type="text" name="enteredTitle" value={userInput.enteredTitle} onChange={changeHandler} autoComplete="off" />
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" min="0.01" step="0.01" name="enteredAmount" value={userInput.enteredAmount} onChange={changeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01"  max="2022-12-31" name="enteredDate" value={userInput.enteredDate} onChange={changeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;