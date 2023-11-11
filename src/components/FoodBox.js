import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ food, allFoods, setAllFoods }) {
  function handleDelete(e) {
    let filteredFoods = allFoods.filter((food) => {
      return food.name !== e;
    });
    console.log(filteredFoods);
    setAllFoods(filteredFoods);
  }
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}</b> kcal
        </p>
        <Button
          type="primary"
          danger
          name={food.name}
          onClick={() => handleDelete(food.name)}
        >
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
