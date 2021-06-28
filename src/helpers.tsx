//React
import React from 'react'

interface IDLink {
  value: string
}

export const MakeIDLink: React.FunctionComponent<IDLink> = ({ value }): JSX.Element => {
  // These values are really long, so it's best to cut them off for display
  const determineValueToDisplay = () => {
    if (value.length > 15) {
      return `${value.slice(0, 15)}...`
    } else {
      return value
    }
  }

  const href: string = `https://etherscan.io/address/${value}`

  return (
    <a href={href} className="id-link" target="_blank" rel="noreferrer noopener">
      {determineValueToDisplay()}
    </a>
  )
}
