import React from 'react'
<<<<<<< HEAD

const Orders = () => {
    return (
        <div>
            
=======
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Orders" />
            <GridComponent
            id="gridcomp"
            dataSource={ordersData}
            allowPaging
            allowSorting
            >
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} /> )}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
            </GridComponent>
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
        </div>
    )
}

export default Orders
