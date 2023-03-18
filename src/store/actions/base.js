import * as TYPES from '../types'

const baseAction = {
    changeInfo(val) {
        return {
            type: TYPES.BASE_INFO,
            info: val
        }
    }
}
export default baseAction