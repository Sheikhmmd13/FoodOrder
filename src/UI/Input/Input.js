import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInputValue } from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Input(props) {
	const amountInputRef = useRef(null);

	function submitHandler(event) {
		event.preventDefault();
		const enteredAmountNum = parseInt(amountInputRef.current.value);
		console.log(enteredAmountNum)

		props.addFood(enteredAmountNum);
	}

	function onBlurHandler(event) {}

	return (
		<form className="w-full flex flex-col gap-2" onSubmit={submitHandler}>
			<input
				{...props.input}
				ref={amountInputRef}
				onBlur={onBlurHandler}
				className="w-full appearance-none block bg-gray-200 text-gray-700 border border-spacing-1 border-gray-200 rounded py-2 px-1 leading-tight focus:outline-none focus:bg-white focus:border-orange-700  caret-orange-700"
			/>
			<button
				type="submit"
				className=" w-full bg-orange-700 hover:bg-orange-900 text-white font-bold py-1 px-2 rounded inline-flex items-center justify-center gap-2">
				<FontAwesomeIcon icon={faPlus} />
				<span>Add</span>
			</button>
		</form>
	);
}

export default Input;
