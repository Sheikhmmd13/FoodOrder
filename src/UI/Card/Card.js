import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import classes from './Card.module.css';

export default function Card() {
	return (
		<div
			className={`${classes.container} bg-[#fff] rounded-xl hover:scale-105 flex justify-between`}>
			<div
				className={`${classes.information} flex justify-start flex-col gap-1`}>
				<h2 className="text-xl font-bold">Food Name</h2>
				<p>Price: 65$</p>
			</div>{' '}
			{/* for title and price */}
			<div
				className={`${classes.functions} flex flex-col justify-center gap-2`}>
				<div className={`flex justify-between items-center gap-1`}>
					<FontAwesomeIcon
						icon={faPlus}
						className="cursor-pointer hover:text-orange-700 transition-colors"
					/>
					<span className="bg-orange-700 px-2 rounded-lg h-auto text-white">
						2
					</span>
					<FontAwesomeIcon
						icon={faMinus}
						className="cursor-pointer  hover:text-orange-700 transition-colors"
					/>
				</div>
				<button
					className={`${classes.addBtn} outline outline-1 outline-orange-700 text-orange-700 px-3 rounded-lg hover:outline-none hover:bg-orange-700 hover:text-white transition-all`}>
					Add
				</button>
			</div>{' '}
			{/* for amound and add to cart */}
		</div>
	);
}
