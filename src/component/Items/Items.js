import Item from '../Item'


const Items = (prop) => {
	return (
		<>
			{prop.items.map((item) => (
				<Item key = {item.id} item = {item} allItems = {prop.items} markingComplete = {prop.markComplete} onDelete={prop.onDelete}/>
			))}

		</>
	)
}

export default Items
