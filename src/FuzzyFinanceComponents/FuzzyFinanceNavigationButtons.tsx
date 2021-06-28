export const FuzzyFinanceNavigationButtons = () => {
  return (
    <header className="headers">
      <div className="titleContainer">
        <div className="fuzzyInuLogo"></div>
        <span className="title">FUZZY INU</span>
      </div>
      <nav className="headerNavigationContainers">
        <button className="mainSiteLinks">
          <a href="https://fuzzy.finance" className="mainLink" style={{ color: 'black' }}>
            Website
          </a>
        </button>
        <button className="mainSiteLinks">
          <a href="https://fuzzyinu.medium.com/" className="mainLink" style={{ color: 'black' }}>
            Terminology
          </a>
        </button>
        <button className="mainSiteLinks">
          <a href="https://t.me/fuzzyinu" className="mainLink" style={{ color: 'black' }}>
            Telegram
          </a>
        </button>
        <button className="mainSiteLinks">
          <a
            href="http://dextools.io/app/uniswap/pair-explorer/0x513f6bb1d10b06315cf130e452fcc7da51a9318f"
            className="mainLink"
            style={{ color: 'black' }}
          >
            Chart
          </a>
        </button>
        <button className="mainSiteLinks">
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
