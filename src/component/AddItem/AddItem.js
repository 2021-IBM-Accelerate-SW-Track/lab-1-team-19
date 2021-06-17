import { useState } from 'react' 

const AddItem = ({ onAdd }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [done, setDone] = useState(false);
	const [quantity, setQuantity] = useState('');
	const [category, setCategory] = useState('');

	
const onSubmit = (e) => {
	e.preventDefault()


	if(!text){
		alert('Please enter an item name before submitting!')
		return
	}

	if(category==="Select" || category === ''){
		alert('Please select a category.')
		return
	}

	onAdd({text, category, quantity})

	setText('')
	setDay('')
	setDone(false)
}


	return (
		<form className = 'add-form' onSubmit = {onSubmit}>

			{/* Item Name Input */}
			<div>
				<label>Item</label>
				<input type = 'text' data-testid="new-item-input" placeholder = 'Add Item' value={text} onChange={(e) => setText(e.target.value)}/>
			</div>

			{/* Item Category Input*/}
			<div>
				<label>Category</label>
				<select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
					<option value="Select">Select</option>
					<option value="Meat">Meat</option>
					<option value="Dairy">Dairy</option>
					<option value="Frozen">Frozen</option>
					<option value="Household">Household</option>
					<option value="Produce">Produce</option>
					<option value="Pantry">Pantry</option>
					<option value="Hygiene">Hygiene</option>
				</select>
			</div>


			{/* Item Quantity Input */}
			<div>
				<label>Quantity</label>
				<input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>

			</div>

			<input type='submit' value='Add' data-testid="new-item-button" />
		</form>
	)
}

export default AddItem
