// React
import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// Components
import { FuzzyTools } from './FuzzyToolsComponents/FuzzyTools'
import { FuzzyFinance } from './FuzzyFinanceComponents/FuzzyFinance'

// Modules, Utils, Types
import { Endpoints } from './Modules/endpoints.module'

const Routes: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route path={Endpoints.FuzzyTools} exact component={FuzzyTools} />
      <Route path={Endpoints.FuzzyFinance} exact component={FuzzyFinance} />
      {/* <Redirect to="/fuzzy-finance" /> */}
      <Redirect to="/fuzzy-tools" />
    </Switch>
  )
}

export default Routes
