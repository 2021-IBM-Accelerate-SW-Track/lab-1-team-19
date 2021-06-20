import Item from '../Item'
import { TiEdit } from 'react-icons/ti';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import React, { useState } from 'react';

const Items = ({ items }) => {
	return (
		<>
			{items.map((item) => (
				<Item
				key = {item.id}
				item = {item}
				  // updateTodo={updateTodo}
					/>
				)
			)};
		</>
	)};
export default Items;
