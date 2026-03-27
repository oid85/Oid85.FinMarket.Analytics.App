import { CONSTANTS } from "../../constants"

export const rowColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value == 'ТРЕНД ВВЕРХ') { return CONSTANTS.COLOR_GREEN }
    if (value == 'НЕТ ТРЕНДА') { return CONSTANTS.COLOR_YELLOW }
    if (value == 'ТРЕНД ВНИЗ') { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}

export const sizeColor = (size, lifeSize) => {
    if (!size) { return CONSTANTS.COLOR_WHITE }
    if (!lifeSize) { return CONSTANTS.COLOR_WHITE }
    if (size == lifeSize) { return CONSTANTS.COLOR_LIGHTGREEN }
    if (size != lifeSize) { return CONSTANTS.COLOR_LIGHTYELLOW }

    return CONSTANTS.COLOR_WHITE
}