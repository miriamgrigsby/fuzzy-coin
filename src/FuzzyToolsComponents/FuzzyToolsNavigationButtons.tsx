export const FuzzyToolsNavigationButtons = () => {
  return (
    <header className={'header'}>
      <div className="titleContainer">
        <div className="fuzzyInuLogo"></div>
        <span className={'title'}>FUZZY TOOLS</span>
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
  )
}
