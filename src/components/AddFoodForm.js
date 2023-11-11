import { Divider, Input, Button, Flex } from 'antd';
import { useState } from 'react';
import foodForm from './foodForm.css';

// Iteration 4
function AddFoodForm({ allFoods, setAllFoods }) {
  const [size, setSize] = useState('large');
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

      <label className="labelForm">Name</label>
      <Input
        className="inputForm"
        value={addFood.name}
        type="text"
        onChange={handleChange}
        name="name"
      />

      <label className="labelForm">Image</label>
      <Input
        className="inputForm"
        value={addFood.image}
        type="text"
        onChange={handleChange}
        name="image"
      />

      <label className="labelForm">Calories</label>
      <Input
        className="inputForm"
        value={addFood.calories}
        type="text"
        onChange={handleChange}
        name="calories"
      />

      <label className="labelForm">Servings</label>
      <Input
        className="inputForm"
        value={addFood.servings}
        type="text"
        onChange={handleChange}
        name="servings"
      />

      <Button type="primary" size={size} onClick={handleSubmit}>
        Primary
      </Button>

      {/* <Button onClick={handleSubmit} type="primary">
        Primary
      </Button> */}
      {/* <button>Create</button> */}
    </form>
  );
}

export default AddFoodForm;
