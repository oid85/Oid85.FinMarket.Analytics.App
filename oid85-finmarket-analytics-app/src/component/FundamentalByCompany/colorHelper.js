import { CONSTANTS } from "../../constants"

export const strokeColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_STATEBLUE }
    if (value == 'ТРЕНД ВВЕРХ') { return CONSTANTS.COLOR_GREEN }
    if (value == 'ТРЕНД ВНИЗ') { return CONSTANTS.COLOR_RED }
    if (value == 'НЕТ ТРЕНДА') { return CONSTANTS.COLOR_DARKSLATEGRAY }

    return CONSTANTS.COLOR_STATEBLUE
}

export const fillColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_STATEBLUE }
    if (value == 'ТРЕНД ВВЕРХ') { return CONSTANTS.COLOR_LIGHTGREEN }
    if (value == 'ТРЕНД ВНИЗ') { return CONSTANTS.COLOR_LIGHTRED }
    if (value == 'НЕТ ТРЕНДА') { return CONSTANTS.COLOR_LIGHTYELLOW }

    return CONSTANTS.COLOR_STATEBLUE
}
