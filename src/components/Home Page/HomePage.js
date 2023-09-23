import { Fragment } from 'react';

import classes from './HomePage.module.css';
import Navbar from '../Navbar/Navbar';
import FoodsList from '../Foods List/FoodsList';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HomePage() {
	return (
		<Fragment>
			<div className={`${classes.homepage} relative`}>
				<Navbar />
				<main className="w-full h-full flex justify-around items-center gap-5 px-5">
					<div
						className={`${classes.foodsList} w-3/5 h-5/6 flex flex-col justify-center items-center `}>
						<FoodsList />
					</div>
					<aside
						className={`${classes.aside} w-2/5 h-4/6 px-6 py-3 rounded-2xl text-[#fff] text-center flex flex-col justify-center items-center gap-10`}>
							<h1 className='text-4xl uppercase font-bold'>restaurant name</h1>
							<FontAwesomeIcon icon={faBurger} className=' text-9xl' />
						</aside>
				</main>
			</div>
		</Fragment>
	);
}

export default HomePage;
