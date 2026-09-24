import {
    SAGA_CLOSE_PRICE_DIAGRAM,
    FETCH_CLOSE_PRICE_DIAGRAM
} from '../types/closePriceDiagramTypes'


export const sagaClosePriceDiagram = () => {
    return {
        type: SAGA_CLOSE_PRICE_DIAGRAM
    }
}

export const fetchClosePriceDiagram = (data) => {
    return {
        type: FETCH_CLOSE_PRICE_DIAGRAM,
        payload: data
    }
}
