import { createBrowserRouter } from 'react-router-dom';
import { getDeliveries, getFood } from '../api/gets';
import Food, { AdminFood } from '../components/Food/Food';
import Delivery, { AdminDelivery } from '../components/Food/Delivery';
import Home from '../components/Home';
import LoginModal from '../components/LoginModal';
import App from '../App';
import Terms from '../components/Terms';

export default createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'carta',
				element: <Food />,
				loader: getFood
			},
			{
				path: 'domicilio',
				element: <Delivery />,
				loader: getDeliveries
			},
			{
				path: 'terms',
				element: <Terms />
			}
		]
	}
]);

export const adminRoutes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <LoginModal />
			},
			{
				path: 'carta',
				element: <AdminFood />,
				loader: getFood
			},
			{
				path: 'domicilio',
				element: <AdminDelivery />,
				loader: getDeliveries
			}
		]
	}
]);
