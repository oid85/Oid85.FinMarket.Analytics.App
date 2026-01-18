import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { trendDynamicReducer } from './trendDynamicReducer'
import { instrumentReducer } from './instrumentReducer'

export const rootReducer = combineReducers({
    app: appReducer,
	trendDynamic: trendDynamicReducer,
    instrument: instrumentReducer
})