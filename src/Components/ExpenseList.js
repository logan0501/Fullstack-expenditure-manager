import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props)=>{

    if(props.items.length ===0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    return (
        <li className="expenses-list">
            {
                props.items.map(element => 
                    <ExpenseItem 
                    key={element.id} 
                    title={element.title} 
                    amount={element.amount}
                    date={element.date} />
               
                    )
            }
        </li>
    );
}

export default ExpenseList;