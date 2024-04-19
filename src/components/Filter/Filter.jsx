import './Filter-style.css';export default function Filter(props) {	const {costs,getYear} = props;	const costsYears = () => {		let years = [new Date().getFullYear()];		const uniqYearsByCosts = Array.from(new Set(costs.map(el => el.date.getFullYear())))		years.push(...uniqYearsByCosts)		return Array.from(new Set(years)).sort((a, b) => b - a) //[2024,2023,2022...]	}	return (		<div className='filter_wrapper'>			<h2>Filter by Year</h2>			<select name='Costs Years' onChange={e => getYear(Number(e.target.value))}>				{costsYears().map(el => <option key={el} value={el}>{el}</option>)}			</select>		</div>	)}