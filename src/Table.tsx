//React
import React from 'react'

//AG Grid
import { AgGridReact, AgGridReactProps } from 'ag-grid-react'
import { ColumnResizedEvent, ICellRendererParams } from 'ag-grid-community'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

// Modules, Utils, Types
import { MakeIDLink } from './helpers'
import { FuzzyTokensData } from './FuzzyToolsComponents/types'

interface Props extends AgGridReactProps {
  data: FuzzyTokensData[]
  onColumnResized?: (event: ColumnResizedEvent) => void
}

const Table: React.FC<Props> = ({ data, onColumnResized }): JSX.Element => {
  // const data = [
  //   {
  //     tok_name: 'Property',
  //     tok_symbol: 'RET',
  //     init_supply: 10000000,
  //     tok_addr: '0xD295b76e13837618DDAF5AC44Ebe1E7069940D5C',
  //     dev_addr: '0x5d52ade5eb167aBcAC3780662b1a2a58201Bac2C',
  //     dep_time: '2021-06-19 14:26:03',
  //     eip_score: 1,
  //   },
  // ]
  data.map((token: FuzzyTokensData) => {
    const tokenSupply = Number(token.init_supply)
    return (token.init_supply = tokenSupply.toExponential(2))
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
              maxWidth: 160,
              headerName: 'Token Name',
            },
            {
              field: 'tok_symbol',
              resizable: true,
              sortable: true,
              maxWidth: 180,
              headerName: 'Token Symbol',
            },
            {
              field: 'init_supply',
              resizable: true,
              sortable: true,
              maxWidth: 160,
              headerName: 'Initial Supply',
            },
            {
              field: 'tok_addr',
              resizable: true,
              sortable: true,
              maxWidth: 180,
              headerName: 'Token Address',
              cellRendererFramework: (value: ICellRendererParams | any) => MakeIDLink(value),
              wrapText: true,
            },

            {
              field: 'dev_addr',
              resizable: true,
              sortable: true,
              maxWidth: 230,
              headerName: 'Developer Address',
              cellRendererFramework: (value: ICellRendererParams | any) => MakeIDLink(value),
              wrapText: true,
            },
            {
              field: 'dep_time',
              resizable: true,
              sortable: true,
              maxWidth: 280,
              headerName: 'Deployment Time',
              sort: 'desc',
              sortIndex: 1,
            },
            {
              field: 'eip_score',
              headerName: 'EIP Score',
              maxWidth: 190,
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
