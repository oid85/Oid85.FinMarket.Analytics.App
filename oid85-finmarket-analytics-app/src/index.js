import React from 'react'
import ReactDOM from 'react-dom/client'
import {thunk} from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './redux/reducers/rootReducer'
import { sagaWatcherTrendDynamic } from './redux/sagas/sagaTrendDynamic'
import { sagaWatcherCompareTrend } from './redux/sagas/sagaCompareTrend'
import { sagaWatcherInstrument } from './redux/sagas/sagaInstrument'
import { sagaWatcherFundamentalParameter } from './redux/sagas/sagaFundamentalParameter'
import { sagaWatcherFundamentalParameterBubble } from './redux/sagas/sagaFundamentalParameterBubble'
import { sagaWatcherWeekTrendDelta } from './redux/sagas/sagaWeekTrendDelta'
import 'bootstrap/dist/css/bootstrap.min.css'

const saga = createSagaMiddleware()

const middlewareEnhancer = applyMiddleware(saga, thunk)
const composedEnhancers = compose(middlewareEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

saga.run(sagaWatcherTrendDynamic)
saga.run(sagaWatcherCompareTrend)
saga.run(sagaWatcherInstrument)
saga.run(sagaWatcherFundamentalParameter)
saga.run(sagaWatcherFundamentalParameterBubble)
saga.run(sagaWatcherWeekTrendDelta)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
