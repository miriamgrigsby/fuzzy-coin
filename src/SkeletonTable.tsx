//React
import React from 'react'

//AG Grid
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

//Helpers
import _ from 'lodash'

const SkeletonTable: React.FC = (): JSX.Element => {
  const mockData: void[] = _.times(20, () => {})

  return (
    <div className="ag-theme-alpine skeleton">
      <AgGridReact
        rowData={mockData}
        gridOptions={{
          rowHeight: 45,
          defaultColDef: {
            flex: 100,
          },
          columnDefs: [
            { field: 'tok_name', headerName: 'Token Name', minWidth: 160 },
            { field: 'tok_symbol', headerName: 'Token Symbol', minWidth: 180 },
            { field: 'init_supply', headerName: 'Initial Supply', minWidth: 160 },
            { field: 'tok_addr', headerName: 'Token Address', minWidth: 200 },
            { field: 'dev_addr', headerName: 'Developer Address', minWidth: 250 },
            { field: 'dep_time', headerName: 'Deployment Time', minWidth: 220 },
            { field: 'eip_score', headerName: 'EIP Score', minWidth: 160 },
          ],
        }}
      ></AgGridReact>
    </div>
  )
}

export default SkeletonTable
