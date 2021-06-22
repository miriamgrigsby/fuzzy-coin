import React from 'react'
import './App.scss'
import Table from './Table'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import { triggerToast } from './Modules/toast.module'
import SkeletonTable from './SkeletonTable'
import ReactTooltip from 'react-tooltip'

export const App = () => {
  const [data, setData] = React.useState<any | null>()

  fetch('https://fuzzy-inu-coin.herokuapp.com/api/tokens/')
    .then((response) => response.json())
    .then((data) => {
      setData(data)
    })

  return (
    <>
      <ToastContainer />
      <ReactTooltip />
      <header className={'header'}>
        <div className="titleContainer">
          <div className="fuzzyInuLogo"></div>
          <span className={'title'}>Fuzzy Tools</span>
          <sup className="betaTitle" data-tip="V0 Beta Web App">
            BETA
          </sup>
        </div>
        <nav className={'headerNavigationContainer'}>
          <button className="mainSiteLink">
            <a href="https://fuzzy.finance" className="mainLink" style={{ color: 'black' }}>
              Website
            </a>
          </button>
          <button className="mainSiteLink">
            <a href="https://fuzzyinu.medium.com/" className="mainLink" style={{ color: 'black' }}>
              Terminology
            </a>
          </button>
          <button className="mainSiteLink">
            <a href="https://t.me/fuzzyinu" className="mainLink" style={{ color: 'black' }}>
              Telegram
            </a>
          </button>
          <button className="mainSiteLink">
            <a
              href="http://dextools.io/app/uniswap/pair-explorer/0x513f6bb1d10b06315cf130e452fcc7da51a9318f"
              className="mainLink"
              style={{ color: 'black' }}
            >
              Chart
            </a>
          </button>
          <button className="mainSiteLink">
            <a
              href="https://fuzzy.finance/whitepaper"
              className="mainLink"
              style={{ color: 'black' }}
            >
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
