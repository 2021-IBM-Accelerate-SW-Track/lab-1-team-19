/*
import Item from '../Item'
import { TiEdit } from 'react-icons/ti';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import React, { useState } from 'react';

const Items = ({ items }) => {
/*
const [todos, setTodos] = useState([]);
	 const updateItem = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }
	*/
/*
	return (
		<>
			{items.map((item) => (
				<Item
				key = {item.id}
				item = {item}
				//  updateItem={updateItem}
					/>
				)
			)};
		</>

	)};
export default Items;
*/
import Item from '../Item'


const Items = (prop) => {
	return (
		<>
			{prop.items.map((item) => (
				<Item key = {item.id} item = {item} allItems = {prop.items} markingComplete = {prop.markComplete} updating ={prop.updateItem}/>
			))}

		</>
	)
}

export default Items
