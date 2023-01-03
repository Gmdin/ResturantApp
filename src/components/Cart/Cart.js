import Model from '../UI/Model';
import classes from './Cart.module.css';

const Cart=(props)=>{
    const cartItem=(
        <ul className={classes['cart-items']}>
            {[{id : 'c1', name:'Sushi', amount:2 , price:12}].map((item)=>{
                return <li key={item.id}>{item.name}</li>
            })}
        </ul>
    )
    return(
        <Model>
            {cartItem}
            <div className={classes.total}>
                <span>Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>      
        </Model>
    )
};
export default Cart;