import { Edit, Delete } from '@mui/icons-material'
import { ReactNode } from 'react'
import { MenuItems } from '../../components/DataTable/components/MenuItems'
import { ColumnProps } from '../../components/DataTable/types'

export type DataTableMenuItems = {
  title: string
  icon: ReactNode
  onClick?: (evt?: any) => void
}

const userMenuItems: (
  row: any
) => DataTableMenuItems[] = (row) => [
  {
    title: "Editar",
    icon: <Edit />,
    onClick: () => {
      console.log("Editar")
    },
  },
  {
    title: "Excluir",
    icon: <Delete />,
    onClick: () => {
      console.log("Excluir")
    },
  },
]

export const userColumns: () => ColumnProps[] = () => [
  {
    name: 'Name',
    selector: 'name',
    id: 'name',
  },
  {
    name: 'Email',
    selector: 'email',
    id: 'email',
  },
  {
    name: 'Ações',
    selector: 'actions',
    id: 'actions',
    customCell: (row) => (
      <MenuItems
        menuItems={userMenuItems(row)}
      >
      </MenuItems>
    ),
  },
]
