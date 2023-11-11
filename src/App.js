import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  return (
    <div className="App">
      {allFoods.map((food) => {
        return (
          <div>
            <FoodBox food={food} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
