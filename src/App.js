import './App.css';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  return (
    <div className="App">
      {allFoods.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} width={100} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
