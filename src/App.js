
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import SignIn from './SignIn';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from './SignUp';
import Home from "./Home";

function App() {
  const submit = async()=>{
    try{
      await addDoc(collection(db, 'tasks'), {
        title: "title",
        description: "description",
        completed: false,
        created: Timestamp.now()
      })
    }catch(e){
      console.log(e);
    }
  }
  return (
      <Router>
        <Routes >
          <Route path="/" element={<SignIn />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
    
      
      </Router>
  );
}

export default App;
