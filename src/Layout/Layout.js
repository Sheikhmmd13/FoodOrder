import { useSelector } from 'react-redux';

import Cart from '../Components/Cart/Cart';
import HomePage from '../Components/Home Page/HomePage';

function Layout() {
	const showCart = useSelector(state => state.showCart.isShownCart);
	return (
		<div className='flex justify-center items-center h-[100vh] w-[100vw]'>
			{showCart ? <Cart /> : null}
			<HomePage />
		</div>
	);
}

export default Layout;
