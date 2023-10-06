import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { getFoods } from '../Components/Foods/FoodsList';

function getTodayFoods() {
	// var Foods;
	const firebaseConfig = {
		apiKey: 'AIzaSyB7mGm4tNc_gmgnVtzm8qBFWmrALvrBu_0',
		authDomain: 'foods-list-f598f.firebaseapp.com',
		databaseURL: 'https://foods-list-f598f-default-rtdb.firebaseio.com',
		projectId: 'foods-list-f598f',
		storageBucket: 'foods-list-f598f.appspot.com',
		messagingSenderId: '401026789673',
		appId: '1:401026789673:web:39781a3c7eef055e0b4738',
	};

	const app = initializeApp(firebaseConfig);
	const database = getDatabase(app);

	// Setting Foods name for Database
	const FoodsFromDataBase = ref(database, 'Foods');
	const Foods = onValue(FoodsFromDataBase, (snapshot) => {
		console.log(snapshot.val())
	});
}

export default getTodayFoods;
