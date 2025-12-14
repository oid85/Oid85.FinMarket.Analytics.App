import {CONSTANTS} from "../../constants"

export const sendPostRequest = async (url, body) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/${url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

    if (response.ok) {
        return await response.json()
    }
}