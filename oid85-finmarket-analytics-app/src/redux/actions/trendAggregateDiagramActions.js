import {
    SAGA_TREND_AGGREGATE_DIAGRAM,
    FETCH_TREND_AGGREGATE_DIAGRAM
} from '../types/trendAggregateDiagramTypes'


export const sagaTrendAggregateDiagram = () => {
    return {
        type: SAGA_TREND_AGGREGATE_DIAGRAM
    }
}

export const fetchTrendAggregateDiagram = (data) => {
    return {
        type: FETCH_TREND_AGGREGATE_DIAGRAM,
        payload: data
    }
}
