import Item from '../Item'
// the onDelete feature
const Items = ({ items, onDelete }) => {
	return (
		<>
			{items.map((item) => (
				<Item key = {item.id} item = {item} onDelete={onDelete}/>
			))}

		</>
	)
}

export default Items
