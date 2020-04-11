import React from 'react';
import logo from './logo.svg';
import GoalList from './components/GoalList'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const goals = [
    {id: 'g1', text: 'Learn React'},
    {id: 'g2', text: 'Learn Time Complexitites & Algorithms'},
    {id: 'g3', text: 'Read Steve Jobs'}
  ]; 

  return (
    <div>
      <center><h2>Today's Goals</h2></center>
      <GoalList goals = {goals}/>
    </div>
  );
};

export default App;
