import { CONSTANTS } from "../../constants"

export const sizeColor = (size, lifeSize) => {
    if (!size) { return CONSTANTS.COLOR_WHITE }
    if (!lifeSize) { return CONSTANTS.COLOR_WHITE }
    if (size == lifeSize) { return CONSTANTS.COLOR_LIGHTGREEN }
    if (size != lifeSize) { return CONSTANTS.COLOR_LIGHTYELLOW }

    return CONSTANTS.COLOR_WHITE
}
