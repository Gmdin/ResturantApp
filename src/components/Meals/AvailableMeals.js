import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect } from 'react';
import { useState } from 'react';
const AvailableMeals = () => {
  const [meals,setMeals]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState(null);
  useEffect(()=>{
    const fetchMealsData=async()=>{
     
        const response=await fetch('https://food-1aa72-default-rtdb.firebaseio.com/meal.json');
        if (!response.ok) {
          setError(true);
          throw new Error('Something went wrong!');
        }
      const responseData=await response.json();
      const loadedMeals=[];

      for (const key in responseData){
        loadedMeals.push({
            id:key,
            name:responseData[key].name,
            description:responseData[key].description,
            price:responseData[key].price
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false); 
    }

     fetchMealsData().catch((error)=>{
      setIsLoading(false); 
      setError(error.message); 
     })
  },[]);
  if(isLoading){
    return (
      <section className={classes.LodingMeals}>
        <p>Loading ....</p>
      </section>
    )
  }
  if(error){
    return (
      <section className={classes.LodingMeals}>
        <p>{error}</p>
      </section>
    )
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
