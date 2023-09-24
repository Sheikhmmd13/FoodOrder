import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { useDispatch } from 'react-redux';

import { toggle } from '../../Redux/Slices/ShowCartSlice';
import classes from './Cart.module.css';

const Backdrop = () => <div className={classes.backdrop} />;
const Overlay = (props) => (
	<div className={classes.cart}>
		<button
			onClick={() => {
				props.dispatch(toggle());
			}}>
			close
		</button>
	</div>
);

function Cart() {
	const dispatch = useDispatch();
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById('backdrop-root')
			)}
            			{ReactDOM.createPortal(
				<Overlay dispatch={dispatch} />,
				document.getElementById('overlay-root')
			)}
		</>
	);
}

export default Cart;
