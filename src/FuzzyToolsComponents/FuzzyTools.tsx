// React
import React, { useEffect } from 'react'
import ReactTooltip from 'react-tooltip'
import { ToastContainer } from 'react-toastify'
// import axios from 'axios'

// Styles
import './FuzzyTools.scss'

// Components
import Table from '../Table'
import SkeletonTable from '../SkeletonTable'
import { FuzzyToolsNavigationButtons } from './FuzzyToolsNavigationButtons'

// Modules, Utils, Types
import { triggerToast } from '../Modules/toast.module'
import { FuzzyToolsDisclaimer } from './FuzzyToolsDisclaimer'

export const FuzzyTools = (): JSX.Element => {
  const [data, setData] = React.useState<any | null>()

  useEffect(() => {
    fetch('https://fuzzy-inu-coin.herokuapp.com/api/tokens/')
      .then((response: Response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        triggerToast({
          description: `Failed to load data: ${error}`,
        })
      })
  }, [])

  return (
    <>
      <ToastContainer />
      <ReactTooltip />
      <FuzzyToolsNavigationButtons />
      {data ? <Table data={data} /> : <SkeletonTable />}
      <FuzzyToolsDisclaimer />
    </>
  )
}
