import styled from 'styled-components';
import { Color } from '.';
import { StyledTableCell } from '../TableCell/styles';

type TableProps = {
	color: Color;
};

export const StyledTable = styled.table<TableProps>`
	border-spacing: 0;
	border-collapse: collapse;
	margin: 10px;

	${StyledTableCell} {
		border-color: ${({ color }) => color};
	}
`;
