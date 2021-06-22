/* Item Information:
		item.itemName: text to go with item (string)
		item.date: JS Date object to store date/time of submission (date)
		item.id: unique id for each item in list (number)
		item.done: whether or not item is completed (boolean)
		item.category: what category the item is in (string)
			*Meat, Dairy, Frozen, Household, Produce, Pantry, Hygeine
		item.quantity: how many of an item to get (number)
*/
/*
import Items from '../Items';
import React, { useState } from 'react';
import EditSharpIcon from '@material-ui/icons/EditSharp';

const Item = ({ item, updateItem }) => {

	const [edit, setEdit] = useState({
     id: null,
      value: 'hello'
		// itemName: '',
		// category: '',
		// quantity: 0
   });

   const submitUpdate = value => {
     updateItem(edit.id, value);
     setEdit({
       id: null,
       value: 'hell'
     });
   };

   if (edit.id) {
     return <Item edit={edit} onSubmit={submitUpdate} />;
   }

	return (

		<div >
			<h3>
				{item.itemName}
				{"  "}
			</h3>
 <EditSharpIcon onClick={() => setEdit({ id:item.id, itemName:item.itemName })} className='edit-icon' />
			<p>
				Amount: {item.quantity}
			</p>

			<p>
				Category: {item.category}
			</p>

			{}
			<p>
				{item.date.getMonth()}/{item.date.getDate()}/{item.date.getFullYear()}
				{" "} {item.date.getHours()}:{item.date.getMinutes()}
			</p>

		</div>
	)
}

export default Item
*/
//-----------------------------------------------------------------------------------------------------------------

/*
import Checkbox from '@material-ui/core/Checkbox'
import { prependOnceListener } from 'process';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import React, { useState } from 'react';

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

function EditItem(item, allItems, updateItem ){ //itemId, itemName, itemQuant,

	/*	const [edit, setEdit] = useState({
		    id: null,
		    name: '',
				quantity: 0
		  });
			*/ /*
			const submitUpdate = ({itemName, itemQuant}) => {
			    updateItem(edit.id, itemName, itemQuant);
			    setEdit({
			      id: null,
			      name: '',
						quantity: 0
			    });
			  };
				if (edit.id) {
				    return <Item edit={edit} onSubmit={submitUpdate} />;
				  }

					let updatedItemList = [];
					for(let [category, itemsAll] of Object.entries(allItems)){
						if(itemsAll.itemName === item.itemName){
 						itemsAll.itemName=nitem;

						//	setEdit({id:item.id, name: item.itemName, quantity:item.quantity})
						}
							updatedItemList.push(itemsAll);
					}
updateItem(updatedItemList);
}

const itemNameStyle = {
	display: "inline",
	color: "blue",
	whiteSpace: "nowrap"
};
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
    <div >
		<label>
      <Checkbox id="checkbox" color="primary" onClick={() => completeItem(prop.item, prop.allItems, prop.markingComplete)}/>
        {itemNameDisplay}
				<EditSharpIcon onClick={() => EditItem(prop.item, prop.allItems,  prop.updating )}/> //prop.item.quantity, prop.item.itemName, prop.item.quantity,
		</label>
      <p>

        Amount: {prop.item.quantity}
      </p>

      <p>
        Category: {prop.item.category}
      </p>
      date

      <p>
        {prop.item.date.getMonth()}/{prop.item.date.getDate()}/{prop.item.date.getFullYear()}:
        {prop.item.date.getHours()}:{prop.item.date.getMinutes()}
      </p>

    </div>
  )
}

export default Item
*/
//---------------------------------------------------------------------------------------------------------------------------

import Checkbox from '@material-ui/core/Checkbox'
import { prependOnceListener } from 'process';

import EditSharpIcon from '@material-ui/icons/EditSharp';
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal";

function completeItem(item, allItems, markComplete){
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

function EditItem(item, allItems, updateItem ){ //itemId, itemName, itemQuant,

	/*	const [edit, setEdit] = useState({
		    id: null,
		    name: '',
				quantity: 0
		  });
			*/
			const submitUpdate = ({itemName, itemQuant}) => {
			    updateItem(edit.id, itemName, itemQuant);
			    setEdit({
			      id: null,
			      name: '',
						quantity: 0
			    });
			  };
				if (edit.id) {
				    return <Item edit={edit} onSubmit={submitUpdate} />;
				  }

					let updatedItemList = [];
					for(let [category, itemsAll] of Object.entries(allItems)){
						if(itemsAll.itemName === item.itemName){
 						itemsAll.itemName=nitem;

						//	setEdit({id:item.id, name: item.itemName, quantity:item.quantity})
						}
							updatedItemList.push(itemsAll);
					}
updateItem(updatedItemList);
}



const itemNameStyle = {
	display: "inline",
	color: "blue",
	whiteSpace: "nowrap"
};

class Edit extends React.Component {

	constructor(props) {
			super(props);

			this.state = {
				modal: false,
				name: "",
				quantity: 0,
				modalInputName: "",
				modalInputNumber:0
			};
		}

		handleChange(e) {
			const target = e.target;
			const name = target.name;
			const quantity = target.quantity;
			const value = target.value;
			// const qvalue = target.qvalue;

			this.setState({
				[name]: value,
				[quantity]: value
			});
		}

		handleSubmit(e) {
			this.setState({ name: this.state.modalInputName, quantity:this.state.modalInputNumber }); //, quantity:this.state.modalInputNumber });
			this.modalClose();
		}

		modalOpen() {
			this.setState({ modal: true });
		}

		modalClose() {
			this.setState({
				modalInputName: "",
				modalInputNumber:0,
				modal: false
			});
		}



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
    <div >
			<label>
      <Checkbox id="checkbox" color="primary" onClick={() => completeItem(prop.item, prop.allItems, prop.markingComplete)}/>
        {itemNameDisplay}
			<a href="javascript:;" onClick={(e) => this.modalOpen(e)}>	<EditSharpIcon />// onClick={() => EditItem(prop.item, prop.allItems,  prop.updating )}/> //prop.item.quantity, prop.item.itemName, prop.item.quantity,
			</a>
		</label>
		<Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
				 <h2>Hello Modal</h2>
				 <div className="form-group">
					 <label>Enter item:</label>
					 <input
						 type="text"
						 value={this.state.modalInputName}
						 name="modalInputName"
						 onChange={(e) => this.handleChange(e)}
						 className="form-control"
					 />
					 <label>Enter quantity:</label>
					 <input
						 type="number"
						 value={this.state.modalInputNumber}
						 name="modalInputNumber"
						 onChange={e => this.handleChange(e)}
						 className="form-control"
					 />
				 </div>
				 <div className="form-group">
					 <button onClick={(e) => this.handleSubmit(e)} type="button">
						 Save
					 </button>
				 </div>
			 </Modal>
      <p>

        Amount: {prop.item.quantity}
      </p>
      <p>
        Category: {prop.item.category}
      </p>
			date
      <p>
        {prop.item.date.getMonth()}/{prop.item.date.getDate()}/{prop.item.date.getFullYear()}:
        {prop.item.date.getHours()}:{prop.item.date.getMinutes()}
      </p>
    </div>
  )
}
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Edit />, rootElement);
export default Item
