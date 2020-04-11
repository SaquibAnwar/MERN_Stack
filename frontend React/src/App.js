import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'
import './App.css';


const App = () => {
  const [todoGoals, setNewGoals] = useState([
    {id: 'g1', text: 'Learn React'},
    {id: 'g2', text: 'Learn Time Complexitites & Algorithms'},
    {id: 'g3', text: 'Read Steve Jobs'}
  ]);


  const addNewGoalHandler = newGoal => {
    //setNewGoals(todoGoals.concat(newGoal));
    setNewGoals((prevGoals) => prevGoals.concat(newGoal));
  };


  return (
    <div>
      <center><h2>Today's Goals</h2></center>
      <NewGoal onAddGoal = {addNewGoalHandler}/>
      <GoalList goals = {todoGoals}/>
    </div>
  );
};

export default App;
