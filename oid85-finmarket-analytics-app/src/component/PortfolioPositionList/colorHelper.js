import { CONSTANTS } from "../../constants"

export const rowColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value == 'ТРЕНД') { return CONSTANTS.COLOR_GREEN }
    if (value == 'СИЛЬНЫЙ ТРЕНД') { return CONSTANTS.COLOR_GREEN }
    if (value == 'НЕТ ТРЕНДА') { return CONSTANTS.COLOR_YELLOW }
    if (value == 'НЕ ОПРЕДЕЛЕН') { return CONSTANTS.COLOR_YELLOW }
    if (value == 'СЛОМ ТРЕНДА') { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}
