import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Main.module.css';

function Main() {
	return (
		<div className="w-full h-5/6 flex">
			<title
				className={`${classes.aside} w-full px-6 py-1 text-[#fff] flex flex-col justify-center items-center gap-10 max-md:gap-5 max-sm:mt-16`}>
				<h1 className="text-4xl text-center uppercase font-bold max-lg:text-3xl">
					restaurant name
				</h1>
				<FontAwesomeIcon
					icon={faBurger}
					className=" text-9xl max-lg:text-7xl"
				/>
			</title>
		</div>
	);
	// return (
	// 		<div className={`${classes.homepage} absolute w-full top-1/2 -translate-y-1/2 overflow-auto`}>
	// 			<main className="w-full h-full flex justify-around items-center px-5 max-lg:flex-col-reverse max-lg:justify-around max-md:justify-around">
	// 				<div
	// 					className={`${classes.foodsList} w-2/5 h-2/5 flex flex-col justify-center items-center max-lg:w-4/5 max-sm:w-full max-sm:h-auto`}>
	// 					<h1 className="text-3xl text-white text-center uppercase font-bold max-lg-text-2xl mb-5">
	// 						Today Foods
	// 					</h1>
	// 					<FoodsList />
	// 				</div>
	// 				<aside
	// 					className={`${classes.aside} w-2/5 h-auto px-6 py-1 text-[#fff] flex flex-col justify-center items-center gap-10 max-lg:w-4/5 max-md:w-full max-md:gap-5 max-sm:mt-16`}>
	// 					<h1 className="text-4xl text-center uppercase font-bold max-lg:text-3xl">
	// 						restaurant name
	// 					</h1>
	// 					<FontAwesomeIcon
	// 						icon={faBurger}
	// 						className=" text-9xl max-lg:text-7xl"
	// 					/>
	// 				</aside>
	// 			</main>
	// 		</div>
	// );
}

export default Main;
