import React from 'react'
import './App.scss'
import Table from './Table'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import { triggerToast } from './Modules/toast.module'
import SkeletonTable from './SkeletonTable'

export const App = () => {
  const [data, setData] = React.useState<any | null>()

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const fetchedData: any = await axios.get('https://fuzzy-inu-coin.herokuapp.com/api/tokens/')
        const receivedData: any = fetchedData.data
        setData(receivedData)
      } catch (error) {
        setData(null)
        triggerToast({
          description: 'Failed to load data',
        })
      }
    }
    fetch()
  }, [])

  return (
    <>
      <ToastContainer />
      <header className={'header'}>
        <span className={'title'}>Fuzzy Inu</span>
        <nav className={'headerNavigationContainer'}>
          <button className={'headerNavigationButton'}>Roadmap</button>
          <button className={'headerNavigationButton'}>How To Buy</button>
          <button className={'headerNavigationButton'}>About</button>
          <button className={'headerNavigationButton'}>Mentions</button>
          <button className={'headerNavigationButton'}>Tools</button>
          <button className={'headerNavigationButton'}>Whitepaper</button>
        </nav>
      </header>
      {/* {data ? <SkeletonTable /> : <Table data={data} />} */}
      {data ? <Table data={data} /> : <SkeletonTable />}
    </>
  )
}
