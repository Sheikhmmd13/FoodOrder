import { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';

import classes from './Cart.module.css';
import Card from '../../UI/Card/Card';
import FoodContext from '../../Context/FoodsContext';
import CartItem from '../../UI/CartItem/CartItem';

const Backdrop = () => <div className={classes.backdrop} />;
const Overlay = (props) => {
	const foodCtx = useContext(FoodContext);
	const totalAmount = `$${foodCtx.totalAmount.toFixed(2)}`

	console.log(foodCtx.totalAmount)
	const cartItemAddHandler = (item) => {
		foodCtx.addItem(item);
	};
	const cartItemremoveHandler = (id) => {
		foodCtx.removeItem(id);
	};

	{
		return (
			<div className={`${classes.cart} w-[35%] h-[60%] flex gap-5 flex-col justify-between py-5 max-lg:w-3/5 max-lg:h-[75%] max-md:w-4/5`}>
				<div className="w-4/5 flex flex-col justify-start mx-auto gap-5 overflow-y-auto">
					{foodCtx.items.map((item) => (
						<CartItem
							key={item.id}
							id={item.id}
							name={item.name}
							price={item.price}
							amount={item.amount}
							onAdd={cartItemAddHandler}
							onRemove={cartItemremoveHandler}
						/>
					))}
				</div>
				<div
					className={`${classes.controls} w-full bottom-5 flex gap-4 items-center justify-center px-7 max-lg:flex-col`}>
					<button
						onClick={props.toggleModal}
						className="w-1/2 max-lg:w-full text-orange-700 outline outline-1 outline-orange-700 rounded-lg py-2 px-4 hover:outline-none hover:bg-orange-700 hover:text-white transition-all">
						Close
					</button>
					<button className="w-1/2 max-lg:w-full bg-orange-700 text-white py-2 px-4 rounded-lg hover:bg-orange-900 transition-all">
						Order {totalAmount}
					</button>
				</div>
			</div>
		);
	}
};

const Backdrop_Element = document.getElementById('backdrop-root');
const OverLay_Element = document.getElementById('overlay-root');

function Cart(props) {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, Backdrop_Element)}
			{ReactDOM.createPortal(
				<Overlay toggleModal={props.toggleModal} />,
				OverLay_Element
			)}
		</>
	);
}

export default Cart;
