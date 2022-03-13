import { StyledTableCell } from './styles';

type TableCellProps = {
	children?: React.ReactNode;
};

export default function TableCell({ children }: TableCellProps) {
	return <StyledTableCell>{children}</StyledTableCell>;
}
