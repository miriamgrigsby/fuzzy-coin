// React
import React from 'react'

// Styles
import './FuzzyFinance.scss'

// Components
import { FuzzyFinanceNavigationButtons } from './FuzzyFinanceNavigationButtons'
import { faCheck, faClock } from '@fortawesome/free-solid-svg-icons'

// Modules, Utils, Types
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FuzzyFinance = () => {
  return (
    <>
      <FuzzyFinanceNavigationButtons />
      <div className="fullCloudContainer">
        <div className="leftCloudContainer">
          <h1 className="fuzzyInuHeaderContainer">
            <span>The people-friendly,</span>
            <span className="fuzzyInuHeader">transparent</span>
            <span className="fuzzyInuHeader">memecoin.</span>
          </h1>
          <p className="fuzzyInuHeaderParagraph">
            Lately there have been too many token dogs that look nice but play dirty. Fuzzy Inu is
            the cute little doge that plays just like he looks.
          </p>
          <div className="socialMediaButtonsContainer">
            <a
              href="https://www.dextools.io/app/uniswap/pair-explorer/0x513f6bb1d10b06315cf130e452fcc7da51a9318f"
              className="socialMediaButton uniswap"
              target="_blank"
              rel="noreferrer noopener"
            ></a>
            <a
              href="https://t.me/FuzzyInu"
              className="socialMediaButton telegram"
              target="_blank"
              rel="noreferrer noopener"
            ></a>
            <a
              href="https://twitter.com/FuzzyInu"
              className="socialMediaButton twitter"
              target="_blank"
              rel="noreferrer noopener"
            ></a>
            <a
              href="https://www.coingecko.com/en/coins/fuzzy-inu"
              className="socialMediaButton gecko"
              target="_blank"
              rel="noreferrer noopener"
            ></a>
            <a
              href="https://etherscan.io/token/0x4bcddfcfa8cb923952bcf16644b36e5da5ca3184"
              className="socialMediaButton etherscan"
              target="_blank"
              rel="noreferrer noopener"
            ></a>
          </div>
          <div className="dataMediaButtonsContainer">
            <a
              href="https://www.dextools.io/app/uniswap/pair-explorer/0x513f6bb1d10b06315cf130e452fcc7da51a9318f"
              target="_blank"
              rel="noreferrer noopener"
              className="dataMediaButton dex"
              style={{ textDecoration: 'none' }}
            >
              DEX Charts
            </a>
            <a
              href="https://app.uniswap.org/#/swap?outputCurrency=0x4bcddfcfa8cb923952bcf16644b36e5da5ca3184"
              target="_blank"
              rel="noreferrer noopener"
              className="dataMediaButton uniswap"
              style={{ textDecoration: 'none' }}
            >
              Buy on Uniswap
            </a>
          </div>
        </div>
        <div className="rightCloudContainer">
          <div className="fuzzyRugIcon"></div>
        </div>
      </div>
      <div className="trustedInvestorBanner">
        <div className="trustedInvestorBannerHeaderContainer">
          <h2 className="trustedInvestorBannerHeader">Trusted by over 1000 Investors</h2>
          <p className="trustedInvestorBannerP">The Anti-Rug Token that educates and motivates</p>
        </div>
        <div className="trustedInvestorBannerStatsContainer">
          <div className="trustedInvestorBannerStatsBox">
            <section className="trustedInvestorBannerStatsBoxSection large">40</section>
            <section className="trustedInvestorBannerStatsBoxSection small">Days Old</section>
          </div>
          <div className="trustedInvestorBannerStatsBox">
            <section className="trustedInvestorBannerStatsBoxSection large">2%</section>
            <section className="trustedInvestorBannerStatsBoxSection small">Redistribution</section>
          </div>
          <div className="trustedInvestorBannerStatsBox">
            <section className="trustedInvestorBannerStatsBoxSection large">1M+</section>
            <section className="trustedInvestorBannerStatsBoxSection small">Market Cap</section>
          </div>
        </div>
      </div>
      <div className="overallRoadMapContainer">
        <header className="overallRoadMapHeader">
          <h1>Launch Plan and Roadmap</h1>
          <p>WHO WE ARE, WHERE WE ARE, AND WHERE WE ARE HEADED</p>
        </header>
        <div className="overallRoadMapContainerInner">
          <div className="overallRoadMapBox">
            <h1>Phase 1: Launch</h1>
            <div className="innerRoadMapBox">
              <ul>
                <li className="phase1">
                  <div className="roadMapMarker">
                    <FontAwesomeIcon icon={faCheck} color="#5E8B7E" />
                  </div>
                  <div className="roadMapLiWrapper">
                    <p>Deploy Contract</p>
                    <p className="roadMapInnerP">
                      Deploy smart contract with 5% transaction limit (Anti-Whales)
                    </p>
                  </div>
                </li>
                <li className="phase1">
                  <div className="roadMapMarker">
                    <FontAwesomeIcon icon={faCheck} color="#5E8B7E" />
                  </div>
                  <div className="roadMapLiWrapper">
                    <p>Add Liquidity</p>
                    <p className="roadMapInnerP">95% of tokens locked into liquidity pool</p>
                  </div>
                </li>
                <li className="phase1">
                  <div className="roadMapMarker">
                    <FontAwesomeIcon icon={faCheck} color="#5E8B7E" />
                  </div>
                  <div className="roadMapLiWrapper">
                    <p>Lock liquidity for 1 Year</p>
                    <p className="roadMapInnerP">Tokens locked for 1 Year</p>
                  </div>
                </li>
                <li className="phase1">
                  <div className="roadMapMarker">
                    <FontAwesomeIcon icon={faCheck} color="#5E8B7E" />
                  </div>
                  <div className="roadMapLiWrapper">
                    <p>Renounce Ownership</p>
                    <p className="roadMapInnerP">
                      The dev has renounced ownership of the smart contract and does not have
                      permission to edit the contract. The dev wallet contains 5%, with 1%
                      specifically allocated to marketing.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="overallRoadMapBox">
            <h1>Phase 2: Growth and Education</h1>
            <div className="innerRoadMapBox">
              <ul>
                <li className="phase2">
                  <div className="roadMapMarker">
                    <FontAwesomeIcon icon={faClock} color="#004445" size="lg" />
                  </div>
                  <div className="roadMapLiWrapper">
                    <p>Crypto Definitions</p>
                    <p className="roadMapInnerP">
                      Provide definitions for critical contract terminology (renouncing ownership,
                      locked liquidity, etc.)
                    </p>
                  </div>
                </li>
                <li className="phase2">
                  <div className="roadMapMarker">
                    <FontAwesomeIcon icon={faClock} color="#004445" size="lg" />
                  </div>
                  <div className="roadMapLiWrapper">
                    <p>Develop Basic Contract Score Tools</p>
                    <p className="roadMapInnerP">
                      With our own ethereum node we will programmatically scan the blockchain for
                      Rugs / Scams / Honeypots. Algorithm will be built overtime.
                    </p>
                  </div>
                </li>
                <li className="phase2">
                  <div className="roadMapMarker">
                    <FontAwesomeIcon icon={faClock} color="#004445" size="lg" />
                  </div>
                  <div className="roadMapLiWrapper">
                    <p>Audit</p>
                    <p className="roadMapInnerP">
                      We will have our smart contract audited by a leading crypto security firm. The
                      audit will be publicly available on our website.
                    </p>
                  </div>
                </li>
                <li className="phase2">
                  <div className="roadMapMarker todo"></div>
                  <div className="roadMapLiWrapper">
                    <p>Airdrops!! Yes, actual airdrops xD</p>
                    <p className="roadMapInnerP">
                      Take a snapshot of current holders to airdrop a new utility token.
                    </p>
                  </div>
                </li>
                <li className="phase2">
                  <div className="roadMapMarker done">
                    <FontAwesomeIcon icon={faCheck} color="#5E8B7E" />
                  </div>
                  <div className="roadMapLiWrapper">
                    <p>600 Token Holders</p>
                    <p className="roadMapInnerP">
                      FUZZY holders are very passionate, and most are all in on FUZZY.
                    </p>
                  </div>
                </li>
                <li className="phase2">
                  <div className="roadMapMarker done">
                    <FontAwesomeIcon icon={faCheck} color="#5E8B7E" />
                  </div>
                  <div className="roadMapLiWrapper">
                    <p>1000 Telegram Members</p>
                    <p className="roadMapInnerP">
                      Over 1000 supportive and motivated FUZZY members. We have a strong community.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="overallRoadMapBox">
            <h1>Phase 3: Expansion and Products</h1>
            <div className="innerRoadMapBox">
              <ul>
                <li className="phase3">
                  <div className="roadMapMarker"></div>
                  <div className="roadMapLiWrapper">
                    <p>Contract Investigation Tools</p>
                    <p className="roadMapInnerP">
                      Easily investigate any contract using Fuzzy (ownership distribution,
                      liquidity, mint functions, etc.)
                    </p>
                  </div>
                </li>
                <li className="phase3">
                  <div className="roadMapMarker"></div>
                  <div className="roadMapLiWrapper">
                    <p>Blog Posts</p>
                    <p className="roadMapInnerP">
                      Release more content to educate new DeFi investors.
                    </p>
                  </div>
                </li>
                <li className="phase3">
                  <div className="roadMapMarker"></div>
                  <div className="roadMapLiWrapper">
                    <p>5000 Holders</p>
                    <p className="roadMapInnerP">Growth of dedicated Fuzzy investors.</p>
                  </div>
                </li>
                <li className="phase3">
                  <div className="roadMapMarker"></div>
                  <div className="roadMapLiWrapper">
                    <p>2000 Telegram Members</p>
                    <p className="roadMapInnerP">
                      Having a strong and active community is critical to helping us achieve our
                      goals!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
