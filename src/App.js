import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  return (
    <div className="App">
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
      {/* ITERATION 1 */}
      {/* {allFoods.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} width={100} />
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
