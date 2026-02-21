import { CONSTANTS } from "../../constants"

export const benchmarkChangeColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 0) { return CONSTANTS.COLOR_GREEN }
    if (value < 0) { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}

export const peColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }

    if (value < 0) { return CONSTANTS.COLOR_RED }
    if (value > 0 && value <= 3) { return CONSTANTS.COLOR_GREEN }
    if (value > 3 && value <= 7) { return CONSTANTS.COLOR_YELLOW }
    if (value > 7) { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}

export const revenueColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 0) { return CONSTANTS.COLOR_GREEN }
    if (value < 0) { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}

export const netProfitColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 0) { return CONSTANTS.COLOR_GREEN }
    if (value < 0) { return CONSTANTS.COLOR_RED }
        
    return CONSTANTS.COLOR_WHITE
}

export const ebitdaColor = (value) => { 
    return CONSTANTS.COLOR_WHITE
}

export const evColor = (value) => {
    return CONSTANTS.COLOR_WHITE
}

export const pbvColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }

    if (value < 0) { return CONSTANTS.COLOR_RED }
    if (value > 0 && value <= 1) { return CONSTANTS.COLOR_GREEN }
    if (value > 1 && value <= 1.5) { return CONSTANTS.COLOR_YELLOW }
    if (value > 1.5) { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}

export const roaColor = (value) => { 
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 15) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}

export const netDebtColor = (value) => {   
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value < 0) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}

export const marketCapColor = (value) => { 
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 1000) { return CONSTANTS.COLOR_GREEN }
    if (value > 500) { return CONSTANTS.COLOR_YELLOW }

    return CONSTANTS.COLOR_WHITE
}

export const dividendYieldColor = (value) => { 
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 10) { return CONSTANTS.COLOR_GREEN }
    if (value > 0) { return CONSTANTS.COLOR_YELLOW }

    return CONSTANTS.COLOR_WHITE
}

export const evEbitdaColor = (value) => { 
    if (!value) { return CONSTANTS.COLOR_WHITE }

    if (value < 0) { return CONSTANTS.COLOR_RED }
    if (value > 0 && value <= 3) { return CONSTANTS.COLOR_GREEN }
    if (value > 3 && value <= 5) { return CONSTANTS.COLOR_YELLOW }
    if (value > 5) { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}

export const netDebtEbitdaColor = (value) => { 
    if (!value) { return CONSTANTS.COLOR_WHITE }

    if (value >= 3.0) { return CONSTANTS.COLOR_RED }
    if (value < 3.0 && value >= 1.5) { return CONSTANTS.COLOR_YELLOW }
    if (value < 1.5) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}

export const ebitdaRevenueColor = (value) => { 
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 0.15) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}

export const deltaMinMaxColor = (value) => { 
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value < 0) { return CONSTANTS.COLOR_RED }
    if (value > 0) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}
