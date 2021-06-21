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
        <div className="titleContainer">
          <div className="fuzzyInuLogo"></div>
          <span className={'title'}>Fuzzy Tools</span>
        </div>
        <nav className={'headerNavigationContainer'}>
          <button className="mainSiteLink">
            <a href="https://fuzzy.finance" className="mainLink">
              Website
            </a>
          </button>
          <button className="mainSiteLink">
            <a href="https://fuzzyinu.medium.com/" className="mainLink">
              Terminology
            </a>
          </button>
          <button className="mainSiteLink">
            <a href="https://t.me/fuzzyinu" className="mainLink">
              Telegram
            </a>
          </button>
          <button className="mainSiteLink">
            <a href="http://dextools.io/app/uniswap/pair-explorer/0x513f6bb1d10b06315cf130e452fcc7da51a9318f" className="mainLink">
              Chart
            </a>
          </button>
          <button className="mainSiteLink">
            <a href="https://fuzzy.finance/whitepaper" className="mainLink">
              Whitepaper
            </a>
          </button>
        </nav>
      </header>
      {data ? <Table data={data} /> : <SkeletonTable />}
      <p className="disclaimer">
        <small>
          This product does not guarantee safe tokens. Always do your own research before investing.
        </small>
      </p>
      <p className="disclaimer">
        <small>The Fuzzy Inu Token Project. 2021.</small>
      </p>
    </>
  )
}
