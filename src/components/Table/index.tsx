import TableRow from '../TableRow';
import { StyledTable } from './styles';

export type Color = 'red' | 'green' | 'blue';

type TableProps = {
	color: Color;
	rows: string[][];
};

export default function Table({ color, rows }: TableProps) {
	return (
		<StyledTable color={color}>
			{rows.map((items, i) => (
				<TableRow key={i} items={items} />
			))}
		</StyledTable>
	);
}
