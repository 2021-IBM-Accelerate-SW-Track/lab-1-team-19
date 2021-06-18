import { useState } from 'react' 
import Button from "@material-ui/core/Button"
import Textfield from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import MenuItem  from "@material-ui/core/MenuItem"

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
				<Textfield type = 'text' data-testid='new-item-input' label = 'Add Item' value={text} onChange={(e) => setText(e.target.value)}/>
			</div>

			{/* Item Category Input*/}
			<div>
				<label>Category</label>
				<Select labelId="category" value={category} onChange={(e) => setCategory(e.target.value)}>
					<MenuItem value="Select">Select</MenuItem>
					<MenuItem value="Meat">Meat</MenuItem>
					<MenuItem value="Dairy">Dairy</MenuItem>
					<MenuItem value="Frozen">Frozen</MenuItem>
					<MenuItem value="Household">Household</MenuItem>
					<MenuItem value="Produce">Produce</MenuItem>
					<MenuItem value="Pantry">Pantry</MenuItem>
					<MenuItem value="Hygiene">Hygiene</MenuItem>
				</Select>
			</div>


			{/* Item Quantity Input */}
			<div>
				<label>Quantity</label>
				<input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>

			</div>

			<Button variant="contained" type='submit' data-testid="new-item-button" > Add </Button>
		</form>
	)
}

export default AddItem
