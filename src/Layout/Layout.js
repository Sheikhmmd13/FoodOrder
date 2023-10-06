
import { useState } from 'react';
import Cart from '../Components/Cart/Cart';
import Main from '../Components/Main/Main';
import Navbar from '../Components/Navbar/Navbar';

function Layout() {
	const [isShowModal, setIsShowModal] = useState(false);

	function showModal(){
		setIsShowModal(true)
	}
	function closeModal(){
		setIsShowModal(false)
	}

	return (
		<div className='mainBody w-3/4 h-4/5'>
			{isShowModal ? <Cart onCloseModal={closeModal}/> : null}
			<Navbar onShowModal={showModal}/>
			<Main />
		</div>
	);
}

export default Layout;
