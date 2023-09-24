import { useSelector } from 'react-redux';
import Card from '../../UI/Card/Card';

export default function FoodsList() {
	const Foods = useSelector(state => state.foods)
	console.log(Foods)
	return (
		<>
			{Foods.map(Food => <Card name={Food.name} price={Food.price} id={Food.id} key={Food.id} />)}
		</>
	);
}
