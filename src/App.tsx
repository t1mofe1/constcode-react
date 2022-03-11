import Table from './components/Table';

export default function App() {
	return (
		<>
			<Table
				color="red"
				rows={[
					['item', 'item', 'item'],
					['item', 'item', 'item'],
					['item', 'item', 'item'],
				]}
			/>
			<Table
				color="green"
				rows={[
					['item', 'item', 'item'],
					['item', 'item', 'item'],
					['item', 'item', 'item'],
				]}
			/>
			<Table
				color="blue"
				rows={[
					['item', 'item', 'item'],
					['item', 'item', 'item'],
					['item', 'item', 'item'],
				]}
			/>
		</>
	);
}
