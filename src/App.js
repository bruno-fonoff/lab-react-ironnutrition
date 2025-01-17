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
  const [filteredFoods, setFilteredFoods] = useState(allFoods);

  function handleShowForm() {
    setshowAddForm(!showAddForm);
  }
  return (
    <>
      <div className="App">
        <Search search={search} setSearch={setSearch} />

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
        <h1>
          {allFoods.length === 0
            ? 'Oops! There is no more content to show.'
            : ''}
        </h1>
      </div>{' '}
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
