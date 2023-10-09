import { useState, useEffect } from 'react';
import Card from '../../UI/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSpinner,
	faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

export default function FoodsList() {
	const [Foods, setFoods] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [httpError, setHttpError] = useState(null);

	useEffect(() => {
		const fetchFoods = async () => {
			setIsLoading(true);
			const response = await fetch(
				'https://foods-list-f598f-default-rtdb.firebaseio.com/Foods.json'
			);

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

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

		fetchFoods().catch((error) => {
			setIsLoading(false);
			setHttpError(error);
		});
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

	if (httpError) {
		return (
			<section className="flex flex-col justify-center items-center gap-3">
				<FontAwesomeIcon
					className="text-4xl text-red-600"
					icon={faCircleExclamation}
				/>
				<h2 className="text-2xl font-bold text-red-600">
					SomeThing went Wrong!
				</h2>
				<p className="text-red-500">Please Reload the Page</p>
			</section>
		);
	}

	const FoodsList = Foods.map((Food) => (
		<>
			<Card
				key={Food.id}
				id={Food.id}
				name={Food.name}
				price={Food.price}
			/>
		</>
	));

	return (
		<>
			<h2 className="py-4 text-3xl font-bold text-white uppercase">
				Today Foods
			</h2>
			{FoodsList}
		</>
	);
}
