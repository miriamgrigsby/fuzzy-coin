//React
import React from 'react'

interface IDLink {
  value: any
}

export const MakeIDLink: React.FunctionComponent<IDLink> = ({ value }): JSX.Element => {
  const determineValueToDisplay = () => {
    if (value.length > 15) {
      return value.slice(0, 15)
    } else {
      return value
    }
  }

  return (
    <a href={'https://etherscan.io/address/' + `${value}`} className="id-link">
      {determineValueToDisplay()}
    </a>
  )
}
