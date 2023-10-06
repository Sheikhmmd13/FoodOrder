import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons';

import classes from './Navbar.module.css';
import FoodContext from '../../Context/FoodsContext';
import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
	const [showMenu, setShowMenu] = useState(false);
	const navliksClasses = [' top-full', 'opacity-100'];
	const foodCtx = useContext(FoodContext);

	const numberOfItem = foodCtx.items.reduce((CurrentNumber, item) => {
		return CurrentNumber + item.amount;
	}, 0);

	function toggleMenu() {
		setShowMenu(!showMenu);
	}

	return (
		<nav
			className={`${classes.navbar} w-full h-12 flex justify-between px-[7%] py-3 sticky top-0`}>
			<div className="flex items-center justify-around h-3/4my-auto">
				<h1 className="font-bold text-white text-3xl">Logo</h1>
			</div>
			<div
				className={`${classes.icons} text-white text-xl h-full my-auto cursor-pointer icons`}>
				{showMenu ? (
					<FontAwesomeIcon
						icon={faX}
						className={classes.x}
						onClick={toggleMenu}
					/>
				) : (
					<FontAwesomeIcon
						icon={faBars}
						className={`${classes.menu}`}
						onClick={toggleMenu}
					/>
				)}
			</div>
			<ul
				className={`${classes.navlinks} ${
					showMenu ? navliksClasses.join(' ') : null
				} flex items-center justify-around my-auto text-xl after:conter`}>
				<li className="cursor-pointer py-1">
					<NavLink to={'/'}>Home</NavLink>
				</li>
				<li className="cursor-pointer py-1">
					<NavLink to={'/order'}>Order</NavLink>
				</li>
				<li className="cursor-pointer py-1">Contact</li>
				<li className="cursor-pointer py-1 flex items-center justify-center gap-2">
					<FontAwesomeIcon
						icon={faCartShopping}
						onClick={props.toggleModal}
					/>
					<span className="bg-orange-700 px-2 rounded-lg h-auto">
						{foodCtx.items.length}
					</span>
				</li>
			</ul>
		</nav>
	);
}
export default Navbar;
