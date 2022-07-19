import {
    
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { DataTableHead, Order } from './components/TableHead';
import { DataTableProps } from './types'

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const applyPagination = (data: any[], page: number, limit: number): any[] => data.slice(page * limit, page * limit + limit)

export const DataTable = ({
  columns,
  data,
  dataKeyOf
}: DataTableProps) => {
    const [page, setPage] = useState<number>(0)
    const [limit, setLimit] = useState<number>(10)

    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const handleRequestSort = (
      event: React.MouseEvent<unknown>,
      property: any,
    ) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handlePageChange = (_: any, newPage: number): void => setPage(newPage)
    const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setLimit(parseInt(event.target.value, 10))
    }

    return (
        <div>
            <>
                <Table>
                    <DataTableHead 
                      onRequestSort={handleRequestSort}
                      order={order}
                      orderBy={orderBy}
                      columns={columns}
                    />
                    <TableBody>
                      {stableSort(data, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                          const idRow = `id_row_${index}`
                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={idRow}
                            >
                              {
                                columns.flatMap((column) => {
                                    const idCell = `id_cell_${index}`
                                    return (
                                        <TableCell
                                          key={idCell}
                                        >
                                          {row[column.selector]}
                                            {/* {
                                              column.customCell
                                              ? column.customCell(row.name)
                                              : row[column.selector]
                                            } */}
                                        </TableCell>
                                    )
                                }) 
                                }
                            </TableRow>
                          );
                      })}
                    </TableBody>
                </Table>

                <TablePagination
                    component="div"
                    count={data.length}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[10]}
                />
            </>
        </div>
    )
}
