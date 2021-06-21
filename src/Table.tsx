//React
import React from 'react'

//AG Grid
import { AgGridReact, AgGridReactProps } from 'ag-grid-react'
import { ColumnResizedEvent, ICellRendererParams } from 'ag-grid-community'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

//Helpers
import { MakeIDLink } from './helpers'

//Types
// import { Company } from '../types'

interface Props extends AgGridReactProps {
  data: any
  onColumnResized?: (event: ColumnResizedEvent) => void
}

const Table: React.FC<Props> = ({ data, onColumnResized }): JSX.Element => {
  data.map((token: any) => {
    const tokenSupply = Number(token.init_supply)
    token.init_supply = tokenSupply.toExponential(2)
  })
  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={data}
        onColumnResized={onColumnResized}
        gridOptions={{
          rowHeight: 45,
          defaultColDef: {
            flex: 100,
            wrapText: true,
            autoHeight: true,
          },
          columnDefs: [
            {
              field: 'tok_name',
              resizable: true,
              sortable: true,
              maxWidth: 180,
              headerName: 'Token Name',
            },
            {
              field: 'tok_symbol',
              resizable: true,
              sortable: true,
              maxWidth: 200,
              headerName: 'Token Symbol',
            },
            {
              field: 'init_supply',
              resizable: true,
              sortable: true,
              maxWidth: 180,
              headerName: 'Initial Supply',
            },
            {
              field: 'tok_addr',
              resizable: true,
              sortable: true,
              maxWidth: 200,
              headerName: 'Token Address',
              cellRendererFramework: (value: ICellRendererParams | any) => MakeIDLink(value),
              wrapText: true,
            },

            {
              field: 'dev_addr',
              resizable: true,
              sortable: true,
              maxWidth: 250,
              headerName: 'Developer Address',
              cellRendererFramework: (value: ICellRendererParams | any) => MakeIDLink(value),
              wrapText: true,
            },
            {
              field: 'dep_time',
              resizable: true,
              sortable: true,
              maxWidth: 250,
              headerName: 'Deployment Time',
              sort: 'desc',
            },
            {
              field: 'eip_score',
              headerName: 'EIP Score',
              maxWidth: 130,
              resizable: true,
              sortable: true,
            },
          ],
          pagination: true,
          paginationPageSize: 20,
        }}
      ></AgGridReact>
    </div>
  )
}

export default Table
