/* Item Information:
		item.itemName: text to go with item (string)
		item.date: JS Date object to store date/time of submission (date)
		item.id: unique id for each item in list (number)
		item.done: whether or not item is completed (boolean)
		item.category: what category the item is in (string)
			*Meat, Dairy, Frozen, Household, Produce, Pantry, Hygeine
		item.quantity: how many of an item to get (number)
*/


/*Can pass in item functions (finished/delete) up here*/
const Item = ({ item }) => {
	return (
		/*If we want to do anything fancy with changing the item
			color when the item is done, we can do it via this div.*/

			/*Delete button goes somewhere in <h3> area maybe? With icon things?*/
			/*Item done somewhere here too?*/
		<div >
			<h3>
				{item.itemName} 
			</h3>
			
			<p>
				Amount: {item.quantity}
			</p> 

			<p>
				Category: {item.category}
			</p>

			{/* Using date object to get information about time/date item added. */}			
			<p>
				{item.date.getMonth()}/{item.date.getDate()}/{item.date.getFullYear()}:
				{item.date.getHours()}:{item.date.getMinutes()}
			</p>

		</div>
	)
}

export default Item
