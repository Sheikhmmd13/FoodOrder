import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function CartItem(props) {
	const item = {
		id: props.id,
		name: props.name,
		price: props.price,
		amount: 1,
	};

	return (
		<div className="w-full py-5 px-4 border border-orange-700 rounded-lg flex items-center justify-around max-[360px]:flex-col max-[360px]:gap-3 ">
			<div className="information flex flex-col max-md:items-center max-md:flex-row max-md:gap-3">
				<h1 className="text-2xl font-semibold">{props.name}</h1>
				<p>price: <span className='text-orange-700'>${props.price}</span></p>
			</div>
			<span className="bg-slate-400 p-1 rounded-lg text-white">
				x{props.amount}
			</span>
			<div className="Controls flex gap-5">
				<FontAwesomeIcon
					icon={faPlus}
					className="cursor-pointer bg-orange-700 text-white p-1 rounded-lg hover:bg-orange-800 transition"
					onClick={props.onAdd.bind(null, item)}
				/>
				<FontAwesomeIcon
					icon={faMinus}
					className="cursor-pointer  bg-orange-700 text-white p-1 rounded-lg hover:bg-orange-800 transition"
					onClick={props.onRemove.bind(null, props.id)}
				/>
			</div>
		</div>
	);
}

export default CartItem;
