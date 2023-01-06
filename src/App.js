
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { Fragment, useState } from 'react';
function App() {
  const [cardToShow,setCardToShow]=useState(false);

  const showCard=()=>{
    setCardToShow(true);
  }
  const hideCard=()=>{
    setCardToShow(false);
  }
  return (
    <Fragment>
    {cardToShow && <Cart onClose={hideCard}/>}
     <Header onShowCard={showCard}/>
     <main>
        <Meals/>
     </main>
    </Fragment>
  );
}

export default App;
