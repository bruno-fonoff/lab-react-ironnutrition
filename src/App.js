import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  const [search, setSearch] = useState('');
  //console.log(allFoods);

  return (
    <>
      <div>
        <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
      </div>
      <div className="App">
        {allFoods.map((food) => {
          return (
            <div key={food.name}>
              <FoodBox food={food} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
