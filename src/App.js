import Header from "./component/header"
import Items from "./component/Items"
import { useState } from 'react'

import './App.css';

function App() {
  let today = new Date();
  const [items, setItems] = useState([
		{
			id: 1,
			itemName: 'Apple',
			date: today,
			done:false,
		},{
			id: 2,
			itemName: 'Banana',
			date: today,
      done: false,
    }
			
	])
  return (
    <div className="container">
      <Header />
      {items.length>0 ? (
        <Items items={items}/>
        
      ) : (
      'No Items :)'
      )}
    </div>
  );
}

export default App;
