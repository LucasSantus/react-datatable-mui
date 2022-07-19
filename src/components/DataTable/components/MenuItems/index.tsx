import { ReactNode } from 'react';
import { DataTableMenuItems } from '../../../../data/datatableColumns/userColumns';

type menuItemsProps = {
    menuItems: DataTableMenuItems[]
    children: ReactNode
}

export const MenuItems = ({
    children,
    menuItems
}: menuItemsProps) => {
    return (
        <div>

        </div>
    )
}