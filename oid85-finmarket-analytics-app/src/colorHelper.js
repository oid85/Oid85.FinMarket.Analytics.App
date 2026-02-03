import { CONSTANTS } from "./constants"

export const peColor = (value) => {
    if (value === 0) { return CONSTANTS.COLOR_WHITE }
    if (value < 0) { return CONSTANTS.COLOR_RED }
    if (value > 0 && value <= 5) { return CONSTANTS.COLOR_WHITE }
    if (value > 5 && value <= 10) { return CONSTANTS.COLOR_YELLOW }
    if (value > 10) { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}

export const revenueColor = (value) => {
    if (value < 0) { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}

export const netProfitColor = (value) => {
    if (value < 0) { return CONSTANTS.COLOR_RED }
        
    return CONSTANTS.COLOR_WHITE
}

export const ebitdaColor = (value) => {
    if (value < 0) { return CONSTANTS.COLOR_RED }
        
    return CONSTANTS.COLOR_WHITE
}

export const evColor = (value) => {
    if (value < 0) { return CONSTANTS.COLOR_RED }
        
    return CONSTANTS.COLOR_WHITE
}