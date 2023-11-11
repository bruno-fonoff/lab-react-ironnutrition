import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  const [search, setSearch] = useState('');
  //console.log(allFoods);

  return (
    <>
      <div className="App">
        <Search search={search} setSearch={setSearch} />
        {/* ITERAÇÃO 1 /3 - OK */}
        {allFoods
          .filter((food) => {
            return food.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((food) => {
            return (
              <div key={food.name}>
                <FoodBox food={food} />
              </div>
            );
          })}
      </div>
      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
    </>
  );
}
export default App;
