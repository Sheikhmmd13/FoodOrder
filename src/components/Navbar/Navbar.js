import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Navbar.module.css';
import { toggle } from '../../Redux/Slices/ShowCartSlice';

function Navbar() {
	const count = useSelector((state) => state.counter.value);
	const showcart = useSelector(state => state.showCart.isShownCart);
	const dispatch = useDispatch();

	return (
		<nav
			className={`${classes.navbar} w-full h-12 flex justify-between px-7 py-3 left-1/2 -translate-x-1/2 absolute`}>
			<div className="flex items-center justify-around h-3/4my-auto">
				<h1 className="font-bold text-white text-3xl">Logo</h1>
			</div>
			<ul className="w-1/4 flex items-center justify-around h-3/4 my-auto text-xl after:conte">
				<li className="cursor-pointer">Home</li>
				<li className="cursor-pointer">Food</li>
				<li className="cursor-pointer">Contact</li>
			</ul>
			<div className="flex flex-row justify-around items-center gap-1 h-auto my-auto text-xl text-white cursor-pointer">
				<FontAwesomeIcon
					icon={faCartShopping}
					onClick={() => {dispatch(toggle()); console.log(showcart)}}
				/>
				<span className="bg-orange-700 px-2 rounded-lg h-auto">
					{count}
				</span>
			</div>
		</nav>
	);
}
export default Navbar;
