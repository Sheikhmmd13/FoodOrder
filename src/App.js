import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import Root from './Pages/Root';
import OrderFoodPage from './Pages/OrderFoodPage';
import Cart from './Components/Cart/Cart';

const router = createBrowserRouter([
	{path: '', element: <Root />, children: [
		{index: true, element: <HomePage />},
		{path: '/order', element: <OrderFoodPage />}
	]}
])

function App() {
	return (
		<div className="flex justify-center items-center h-[100vh] w-[100vw]">
			<RouterProvider router={router}/>
		</div>
	);
}

export default App;
