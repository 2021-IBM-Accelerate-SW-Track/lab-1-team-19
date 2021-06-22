/*
import Header from "./component/header"
import Items from "./component/Items"
import AddItem from "./component/AddItem"
import { useState } from 'react'
import Button from '@material-ui/core/Button'


function App() {
  const [addBox, setAddBox] = useState(true)

  let today = new Date();
  const [items, setItems] = useState([
		{
			id: 1,
			itemName: 'Apple',
			date: today,
			done:false,
      category:'Produce',
      quantity:2,
		},{
			id: 2,
			itemName: 'Banana',
			date: today,
      done: false,
      category:'Produce',
      quantity:3,
    }
	])

  const addItem = (item) => {
    const newId = Math.floor(Math.random() * 100000) + 1

    //Dummy date here so that it doesn't crash- needs to be updated with
    //current date.
    let dummyDate = new Date('December 25, 2001 03:25:00')

    var length = items.length;

    //Ensuring no duplicate items.
    for (var i = 0; i < length; i++) {
      if (items[i].itemName.toLowerCase() === item.text.toLowerCase()){
        alert('Error: No duplicate items.')
        return;
      }
    }

    //Creating new item to add to list
    const newItem = {
      id: newId,
      itemName: item.text,
      date: dummyDate,
      category: item.category,
      quantity: item.quantity,
      done: false,
    }

    setItems([...items, newItem])
}
///////////////////////////////////////////////////////////////////////////
const [todos, setTodos] = useState([
/*  id: 1,
  itemName: '',
  date: today,
  done:false,
  category:'Produce',
  quantity:0,*/

  /*
]);
const updateItem = (todoId, newValue) => {
 if (!newValue.text || /^\s*$/.test(newValue.text)) {
   return;
 }
 setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
}
/////////////////////////////////////////////////////////////////////////////
return (
  <div className="container">
    <Header />
    <Button variant="contained" color='primary' onClick={() => setAddBox(!addBox)}>Add item</Button>

    {addBox && <AddItem onAdd = {addItem}   updateItem={updateItem}/>}

    {items.length>0 ? (
        <Items items={items} />
    ) : (
    'No Items :)'
    )}


    </div>
)
}
export default App;
*/
import Header from "./component/header"
import Items from "./component/Items"
import AddItem from "./component/AddItem"
import { useState } from 'react'
import Button from '@material-ui/core/Button'

function App() {
  const [addBox, setAddBox] = useState(true)
  let today = new Date();
  const [items, setItems] = useState([
		{
			id: 1,
			itemName: 'Apple',
			date: today,
			done:false,
      category:'Produce',
      quantity:2,
		},{
			id: 2,
			itemName: 'Banana',
			date: today,
      done: false,
      category:'Produce',
      quantity:3,
    }
	])




  const addItem = (item) => {
    const newId = Math.floor(Math.random() * 100000) + 1

    //Dummy date here so that it doesn't crash- needs to be updated with
    //current date.
    let dummyDate = new Date('December 25, 2001 03:25:00')

    var length = items.length;

    //Ensuring no duplicate items.
    for (var i = 0; i < length; i++) {
      if (items[i].itemName.toLowerCase() === item.text.toLowerCase()){
        alert('Error: No duplicate items.')
        return;
      }
    }

    //Creating new item to add to list
    const newItem = {
      id: newId,
      itemName: item.text,
      date: dummyDate,
      category: item.category,
      quantity: item.quantity,
      done: false,
    }

    setItems([...items, newItem])
}


return (
  <div className="container">
    <Header />
    <Button variant="contained" color='primary' onClick={() => setAddBox(!addBox)}>Add item</Button>

    {addBox && <AddItem onAdd = {addItem} />}

    {items.length>0 ? (
        <>
        <Items markComplete={setItems} items={items} updateItem={setItems} />

        </>
    ) : (
    'No Items :)'
    )}


    </div>
)
}
export default App;
