import mealImages from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header=props=>{
    return (
        <>
        <header className={classes.header}>
            <h1>Meal</h1>
           <HeaderCartButton onClick={props.onShowCard}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImages} alt="a table full of delicious food"/>
        </div>
        </>
    )
};
export default Header;