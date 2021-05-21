import { combineReducers } from "redux";

//Le state par défault
const initialState = {
    name: "E-brairie",
    init: false,
    loading: false
}

//Le reducer
const initialStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APP_READY':
            return { ...state, loading: false, init: true }
        case 'APP_INIT':
            return { ...state, loading: true }
        case 'APP_RESET':
            return state
        default:
            return state
    }
}

//L'export du reducer que nous assignons à la clef `app`
const rootReducer = combineReducers({ app: initialStateReducer })

export default rootReducer