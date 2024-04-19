import './cost-list.css'import CostItem from "./CostItem";export default function CostList(props) {	const {costs} = props;	const displayCostsList = () => {		if (costs.length === 0) {			return <h2>No Costs</h2>		} else {			return costs.map(item =>				<CostItem					key={item.id}					date={item.date}					name={item.name}					price={item.price}				/>)		}	}	return (		<ul className={'cost_list'}>			{displayCostsList()}		</ul>	)}