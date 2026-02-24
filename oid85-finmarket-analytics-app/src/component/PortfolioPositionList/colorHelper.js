import { CONSTANTS } from "../../constants"

export const rowChangeColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value == 1.6) { return CONSTANTS.COLOR_GREEN }
    if (value == 1.3) { return CONSTANTS.COLOR_GREEN }
    if (value == 1.0) { return CONSTANTS.COLOR_YELLOW }
    if (value == 0.5) { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}
