import TableCell from '../TableCell';

type TableRowProps = {
	items: string[];
};

export default function TableRow({ items }: TableRowProps) {
	return (
		<tr>
			{items.map((content, i) => (
				<TableCell key={i}>{content}</TableCell>
			))}
		</tr>
	);
}
