import { Outlet } from 'react-router-dom';

import Cart from '../Components/Cart/Cart';
import Navbar from '../Components/Navbar/Navbar';
import { useState } from 'react';

function Root() {
	const [showModal, setShowModal] = useState(false);

    function ShowingModalToggle(){
        if(showModal) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }

    }

	return (
		<div className="mainBody w-3/4 h-[85vh]">
			{showModal ? <Cart toggleModal={ShowingModalToggle}/> : null}
            <Navbar toggleModal={ShowingModalToggle}/>
			<main className="w-full h-full px-2 py-1">
				<Outlet />
			</main>
		</div>
	);
}

export default Root;
