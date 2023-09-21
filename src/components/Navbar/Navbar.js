import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Navbar.module.css';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
	return (
		<nav
			className={`${classes.navbar} w-3/4 h-14 flex justify-between px-7 left-1/2 -translate-x-1/2 my-10 absolute rounded-3xl`}>
			<h1 className="text-3xl font-bold p-2 text-white">Logo</h1>
			<ul className="w-1/4 flex justify-around h-1/2 my-auto text-xl after:conte">
				<li className="cursor-pointer">Home</li>
				<li className="cursor-pointer">Food</li>
				<li className="cursor-pointer">Contant</li>
			</ul>
			<div className="flex flex-row justify-around items-center gap-2 h-auto my-auto text-xl text-white cursor-pointer">
				<FontAwesomeIcon icon={faCartShopping} className=''/>
				<span className='bg-zinc-400 px-2 rounded-lg h-auto'>2</span>
			</div>
		</nav>
	);
}

export default Navbar;
