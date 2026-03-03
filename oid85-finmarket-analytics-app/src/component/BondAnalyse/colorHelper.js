import { CONSTANTS } from "../../constants"

export const couponColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }

    return CONSTANTS.COLOR_GREEN
}
