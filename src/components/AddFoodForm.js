import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ allFoods, setAllFoods }) {
  const [addFood, setAddFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  function handleChange(e) {
    setAddFood({ ...addFood, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAllFoods([...allFoods, addFood]);

    setAddFood({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label style={{ width: '100px', margin: '20px' }}>Name</label>
      <Input
        style={{ width: '500px', margin: '20px' }}
        value={addFood.name}
        type="text"
        onChange={handleChange}
        name="name"
      />

      <label style={{ width: '100px', margin: '20px' }}>Image</label>
      <Input
        style={{ width: '500px', margin: '20px' }}
        value={addFood.image}
        type="text"
        onChange={handleChange}
        name="image"
      />

      <label style={{ width: '100px', margin: '20px' }}>Calories</label>
      <Input
        style={{ width: '500px', margin: '20px' }}
        value={addFood.calories}
        type="text"
        onChange={handleChange}
        name="calories"
      />

      <label style={{ width: '100px', margin: '20px' }}>Servings</label>
      <Input
        style={{ width: '500px', margin: '20px' }}
        value={addFood.servings}
        type="text"
        onChange={handleChange}
        name="servings"
      />

      <button onClick={handleSubmit} type="submit">
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
