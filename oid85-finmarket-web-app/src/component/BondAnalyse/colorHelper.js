import { CONSTANTS } from "../../constants"

export const couponColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }

    return CONSTANTS.COLOR_GREEN
}

export const yieldColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 15.5) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_YELLOW
}

export const priceColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value < 1000) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_YELLOW
}

export const daysToMaturityColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 365 * 5) { return CONSTANTS.COLOR_GREEN }
    if (value > 365 * 1) { return CONSTANTS.COLOR_LIGHTGREEN }

    return CONSTANTS.COLOR_YELLOW
}
