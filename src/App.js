import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Button } from 'antd';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [showAddForm, setshowAddForm] = useState(false);
  const [search, setSearch] = useState('');
  //console.log(allFoods);
  function handleShowForm() {
    setshowAddForm(!showAddForm);
  }
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
                <FoodBox
                  food={food}
                  allFoods={allFoods}
                  setAllFoods={setAllFoods}
                />
              </div>
            );
          })}
      </div>
      <div className="buttonShowHide">
        <Button onClick={handleShowForm}>
          {showAddForm === true ? 'Hide Form' : 'Add New Food'}
        </Button>
      </div>
      {showAddForm === true && (
        <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
      )}
    </>
  );
}
export default App;
