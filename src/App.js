import Header from "./component/header"
import Items from "./component/Items"
import { useState } from 'react'
//import Button from '@material-ui/core/Button'

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
  // Function to Delete Items
  const deleteItems = (itemName) => {
    setItems(items.filter((item)=>item.itemName !== itemName))

  }


  return (
    <div className="container">
      <Header />
      

      {items.length>0 ? (
        <Items items={items} onDelete={deleteItems}/>
        
        
      ) : (
      'No Items :)'
      )}
    </div>
  );
}

export default App;
