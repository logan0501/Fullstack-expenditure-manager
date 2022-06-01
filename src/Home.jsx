import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React,{ useState ,useEffect} from "react";
import "./index.css"
import { addDoc, collection, orderBy, serverTimestamp } from "firebase/firestore"; 
import {db,firestore} from './firebase'
import { query, getDocs } from "firebase/firestore";
import MyAppBar from "./Components/MyAppBar";



const INITIAL_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2020, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
];

export default function Home() {
   
  const [expenses,setExpenses]=useState(INITIAL_EXPENSES);
  useEffect(() => {
    async function fetchMyAPI() {
        const id =localStorage.getItem('id');
        const q = query(collection(db, id));  
        const querySnapshot = await getDocs(q);
        let list=[];
        querySnapshot.forEach((doc) => { 
            const temp = doc.data();
            temp.date = new Date(temp.date);
            list.push(temp);
          });
          console.log(list);
          setExpenses(list);
      }
  
      fetchMyAPI()

}, []);
    const submit = async(data)=>{
 
        const id = localStorage.getItem('id');
        await addDoc(collection(db, id),data);
    }
  const expenseHandler = (data)=>{
    data.date = data.date.toDateString();
    submit(data);
    data.date = new Date(data.date);
    setExpenses((prevdata)=>{return [data,...prevdata];});

  }
  return (
   
        <div>
        <MyAppBar />
          <NewExpense onSaveData={expenseHandler}/>
          <Expenses items={expenses}/>   
          
        </div>
  
 
  );
}

