import React from 'react'
import './Icon.css'
import {CONSTANTS} from '../../constants'
import {TextElement} from "./TextElement"
import {NumberElement} from "./NumberElement"

export const Icon = ({displayType, displayValue, displayColor}) => {

    switch (displayType) {
        case CONSTANTS.DISPLAY_TYPE_STRING:
            return <TextElement value={displayValue} color={displayColor}/>

        case CONSTANTS.DISPLAY_TYPE_NUMBER:
            return <NumberElement value={displayValue} color={displayColor}/>

        default:
            return <React.Fragment>{displayValue}</React.Fragment>
    }
}