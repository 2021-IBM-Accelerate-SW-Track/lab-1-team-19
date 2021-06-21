import Checkbox from '@material-ui/core/Checkbox'
import { FaTimes } from 'react-icons/fa'
/* Item Information:
    item.itemName: text to go with item (string)
    item.date: JS Date object to store date/time of submission (date)
    item.id: unique id for each item in list (number)
    item.done: whether or not item is completed (boolean)
    item.category: what category the item is in (string)
      *Meat, Dairy, Frozen, Household, Produce, Pantry, Hygeine
    item.quantity: how many of an item to get (number)
*/

function completeItem(item, allItems, markComplete){
	//Basically edit the item list so that it's marked done or not
	//To edit, we create a new modified list

	let updatedItemList = [];
	for(let [category, itemsAll] of Object.entries(allItems)){
		if(itemsAll.itemName === item.itemName){
			if(itemsAll.done){
				itemsAll.done = false;
			}else{
			  itemsAll.done = true;
			}			  
		}
		updatedItemList.push(itemsAll); //becomes the new item list and renders this instead
	}
	markComplete(updatedItemList); //referring back to the setItems useState in the main App.js file
}

const itemNameStyle = {
	display: "inline",
	color: "blue",
	whiteSpace: "nowrap"
};



/*Can pass in item functions (finished/delete) up here*/
const Item = (prop) => {
  let isTrue = false;
  let itemNameDisplay = '';

  if(prop.item.done){
    //marking complete so put a strike through everything
    itemNameDisplay = <h3><s>{prop.item.itemName}</s></h3>;
  }else{
	//not complete, so don't put a strike
    itemNameDisplay = <h3>{prop.item.itemName}</h3>;
  }

  return (
    /*If we want to do anything fancy with changing the item
      color when the item is done, we can do it via this div.*/

      /*Delete button goes somewhere in <h3> area maybe? With icon things?*/
      /*Item done somewhere here too?*/
    <div >

      {/*Marking Complete Code -- need to put in same line*/}
		<label>
      <Checkbox id="checkbox" color="primary" onClick={() => completeItem(prop.item, prop.allItems, prop.markingComplete)}/>    
        {itemNameDisplay} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() =>prop.onDelete(prop.item.itemName)} />
		</label>	
      <p>

        Amount: {prop.item.quantity}
      </p> 

      <p>
        Category: {prop.item.category}
      </p>

      {/* Using date object to get information about time/date item added. */}  
      date
        
      <p>
        {prop.item.date.getMonth()}/{prop.item.date.getDate()}/{prop.item.date.getFullYear()}:
        {prop.item.date.getHours()}:{prop.item.date.getMinutes()}
      </p>

    </div>
  )
}

export default Item
