import * as TYPES from '../types'

const init = {
    info: null
}
export default function baseReducer(state = init, action) {
    switch(action.type) {
        case TYPES.BASE_INFO: {
            console.log('我在变化')
            state = {
                ...state,
                info: action.info
            }
        }
    }
    return state
}