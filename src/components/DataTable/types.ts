export type ColumnProps = {
    id: string
    name: string
    selector: string
    customCell?: (
        row: any,
    ) => JSX.Element | Element | void | string | null
}

export type DataTableProps = {
    columns: ColumnProps[]
    data: any[]
    dataKeyOf?: any
}