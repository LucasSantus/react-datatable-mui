import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

export type Order = 'asc' | 'desc';

interface DataTableHeadProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void
    order: Order
    orderBy: string
    columns: any[]
}

export const DataTableHead = ({
    onRequestSort,
    order,
    orderBy,
    columns
}: DataTableHeadProps) => {
    const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => { onRequestSort(event, property) };

    return (
        <TableHead>
            <TableRow>
                {columns.map((item) => (
                    <TableCell
                        key={item.id}
                        sortDirection={orderBy === item.id ? order : false}
                    >
                        {
                            item.id === 'actions' ?
                                <>
                                    {item.name}
                                </>
                            :
                                <TableSortLabel
                                    active={orderBy === item.id}
                                    direction={orderBy === item.id ? order : 'asc'}
                                    onClick={createSortHandler(item.id)}
                                >
                                    {item.name}
                                </TableSortLabel>
                        }
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}