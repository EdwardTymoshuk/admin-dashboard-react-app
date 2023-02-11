import React from 'react'
<<<<<<< HEAD

const Kanban = () => {
    return (
        <div>
            
=======
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'

import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'

const Kanban = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="App" title="Kanban" />
            <KanbanComponent
            id="kanban"
            dataSource={kanbanData}
            cardSettings={{contentField: 'Summary', header: 'Id'}}
            keyField="Status"
            >
                <ColumnsDirective>
                {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
            </KanbanComponent>
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
        </div>
    )
}

export default Kanban
