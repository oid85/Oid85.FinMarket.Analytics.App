import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { trendDynamicReducer } from './trendDynamicReducer'
import { compareTrendReducer } from './compareTrendReducer'
import { instrumentReducer } from './instrumentReducer'
import { fundamentalParameterReducer } from './fundamentalParameterReducer'
import { macroParameterReducer } from './macroParameterReducer'
import { fundamentalParameterBubbleReducer } from './fundamentalParameterBubbleReducer'
import { weekTrendDeltaReducer } from './weekTrendDeltaReducer'

export const rootReducer = combineReducers({
    app: appReducer,
	trendDynamic: trendDynamicReducer,
    compareTrend: compareTrendReducer,
    instrument: instrumentReducer,
    fundamentalParameter: fundamentalParameterReducer,
    macroParameter: macroParameterReducer,
    fundamentalParameterBubble: fundamentalParameterBubbleReducer,
    weekTrendDelta: weekTrendDeltaReducer
})