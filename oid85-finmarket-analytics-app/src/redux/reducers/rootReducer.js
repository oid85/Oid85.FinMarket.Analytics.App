import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { trendDynamicReducer } from './trendDynamicReducer'
import { compareTrendReducer } from './compareTrendReducer'
import { instrumentReducer } from './instrumentReducer'
import { fundamentalParameterReducer } from './fundamentalParameterReducer'
import { macroParameterReducer } from './macroParameterReducer'
import { weekTrendDeltaReducer } from './weekTrendDeltaReducer'
import { portfolioReducer } from './portfolioReducer'
import { bondPortfolioReducer } from './bondPortfolioReducer'
import { bondAnalyseReducer } from './bondAnalyseReducer'
import { closePriceDiagramReducer } from './closePriceDiagramReducer'

export const rootReducer = combineReducers({
    app: appReducer,
	trendDynamic: trendDynamicReducer,
    compareTrend: compareTrendReducer,
    instrument: instrumentReducer,
    fundamentalParameter: fundamentalParameterReducer,
    macroParameter: macroParameterReducer,
    weekTrendDelta: weekTrendDeltaReducer,    
    portfolio: portfolioReducer,
    bondPortfolio: bondPortfolioReducer,
    bondAnalyse: bondAnalyseReducer,
    closePriceDiagram: closePriceDiagramReducer
})