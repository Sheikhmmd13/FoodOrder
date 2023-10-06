import { useState, useEffect } from 'react';
import Card from '../../UI/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const DUMMY_FOODS_LIST = [
	{
		id: 'burger',
		name: 'Burger',
		price: 5.99,
	},
	{
		id: 'pizza',
		name: 'Pizza',
		price: 11.99,
	},
	{
		id: 'salad',
		name: 'Salad',
		price: 6.5,
	},
];

export default function FoodsList() {
	const [Foods, setFoods] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchFoods = async () => {
			setIsLoading(true);
			const response = await fetch(
				'https://foods-list-f598f-default-rtdb.firebaseio.com/Foods.json'
			);
			const responseData = await response.json();

			const loadedFoods = [];

			for (const key in responseData) {
				loadedFoods.push({
					id: key,
					name: responseData[key].name,
					price: responseData[key].price,
				});
			}

			setFoods(loadedFoods);
			setIsLoading(false);
		};

		fetchFoods();
	}, []);

	if (isLoading) {
		return (
			<section>
				<p className="text-3xl font-bold text-white">
					<FontAwesomeIcon icon={faSpinner} />
				</p>
			</section>
		);
	}

	const FoodsList = Foods.map((Food) => (
		<Card key={Food.id} id={Food.id} name={Food.name} price={Food.price} />
	));

	return (
		<>
			{isLoading ? (
				<p className="text-3xl text-white font-bold">
					Loading Foods...
				</p>
			) : null}
			{FoodsList}
		</>
	);
}
