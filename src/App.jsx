import './app-style.css'
import CostList from "./components/cost-components/CostList";
import NewCostForm from "./components/NewCostForm/NewCostForm";
import {useState} from "react";
import Filter from "./components/Filter/Filter";
import Diagram from "./components/Diagram/Diagram";

const START_COSTS = [
	{
		id: 'c1',
		date: new Date(2021, 3, 12),
		name: "Холодильник",
		price: '1200',
	},
	{
		id: 'c2',
		date: new Date(2022, 2, 2),
		name: "Mac Book",
		price: '2200',
	},
	{
		id: 'c3',
		date: new Date(2023, 2, 12),
		name: "Iphone",
		price: '999',
	},
	{
		id: 'c4',
		date: new Date(2022, 2, 12),
		name: "Iphone12",
		price: '1099',
	},
	{
		id: 'c4g',
		date: new Date(2024, 2, 12),
		name: "Iphone12",
		price: '1099',
	},
	{
		id: 'c5',
		date: new Date(2024, 1, 25),
		name: "Mac Book Pro",
		price: '2500',
	},
	{
		id: 'c6',
		date: new Date(2024, 2, 25),
		name: "Mac Book Pro",
		price: '5000',
	},
	{
		id: 'c7',
		date: new Date(2024, 2, 25),
		name: "Mac",
		price: '1000',
	},
]


function App() {
	const [costs, setCosts] = useState(START_COSTS);
	const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
	const [showForm, setShowForm] = useState(false);

	const filteredCostsArray = costs.filter(el => el.date.getFullYear() === filteredYear)

	const addNewCostHandler = (data) => setCosts(prev => [
		data,
		...prev
	])

	const selectedYear = (year) => {
		setFilteredYear(year)
	}

	const displayForm = () => {
		const hiddenFormHandler = () => setShowForm(false)

		if (!showForm) {
			return (
				<div className='show_form'>
					<button
						type='button'
						onClick={()=> setShowForm(true)}
					>Add New Cost</button>
				</div>
			)
		} else {
			return <NewCostForm addNewCostHandler={addNewCostHandler} hiddenForm={hiddenFormHandler}/>
		}
	}

	//TODO: Закончил над работой Диаграммы

	return (
		<div className="App">
			<div className="container">
				{displayForm()}
				<Diagram costs={filteredCostsArray}/>
				<Filter costs={costs} getYear={selectedYear}/>
				<CostList costs={filteredCostsArray}/>
			</div>
		</div>
	);
}

export default App;
