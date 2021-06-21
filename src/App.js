import Header from "./component/header"
import Items from "./component/Items"
import AddItem from "./component/AddItem"
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import {Grid, Switch, Paper} from "@material-ui/core"
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import { FormLabel } from "@material-ui/core"
import  FormControlLabel  from "@material-ui/core/FormControlLabel"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme= createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

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

  // Function to delete items with icon
  const deleteItems = (itemName) => {
    setItems(items.filter((item)=>item.itemName !== itemName))

  }


  const addItem = (item) => {
    const newId = Math.floor(Math.random() * 100000) + 1

    //Dummy date here so that it doesn't crash- needs to be updated with
    //current date.
    let dummyDate = new Date()

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
  <ThemeProvider theme={theme}>
    <FormControlLabel
    control={<Switch 
    checked= {darkMode} 
    onChange={() => setDarkMode(!darkMode)}
    name="checkedA"/>}
    label="Dark Mode"/>
  
    <Paper style={{ height: "180vh"}}>
    <Grid container direction="column">

    <div className="container">
      <Header />
      <Button variant="contained" color='primary' onClick={() => setAddBox(!addBox)}>Add item</Button>

      {addBox && <AddItem onAdd = {addItem} />}

      {items.length>0 ? (
          <>
          <Items markComplete={setItems} onDelete={deleteItems} items={items}  /> 
          
          </>
      ) : (
      'No Items :)'
      )}
      </div>
      </Grid>
        </Paper>
    </ThemeProvider>
)
}
export default App;
