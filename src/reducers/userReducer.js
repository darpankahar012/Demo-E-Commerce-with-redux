// import {
//     USER_LOADED
//     , USER_LOADING
//     , AUTH_ERROR
//     , LOGIN_FAIL
//     , LOGIN_SUCCESS
//     , LOGOUT_SUCCESS
//     , REGISTER_FAIL
//     , REGISTER_SUCCESS
// } from "../actions/types";

// // const user = JSON.parse(localStorage.getItem("jwt"));

// const initialState = {
//     token: localStorage.getItem("jwt"),
//     isAuthenticated: null,
//     isLoading: false,
//     user: null
// };

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case USER_LOADING:
//             return {
//                 ...state,
//                 isLoading: true
//             };
//         case USER_LOADED:
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 isLoading: false,
//                 user: action.payload
//             };
//         case REGISTER_SUCCESS:
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 ...action.payload,
//                 isAuthenticated: true,
//                 isLoading: false,
//             };
//         case AUTH_ERROR:
//         case LOGIN_FAIL:
//         case LOGOUT_SUCCESS:
//         case REGISTER_FAIL:
//             return {
//                 ...state,
//                 token: null,
//                 user: null,
//                 isAuthenticated: false,
//                 isLoading: false,
//             };
//         default:
//             return state
//     }
// }

const defaultState = {
    loggedIn: false,
    submit: false,
    user: {}
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                submit: false,
                loggedIn: true,
                user: { ...action.payload }
            }
        case "CREATE_USER":
            return {
                ...state,
                // loggedIn: false,
                submit: true,
                // user: { ...action.payload }
            }
        case "LOG_OUT":
            // localStorage.clear()
            localStorage.removeItem("token")
            return {
                ...state,
                loggedIn: false,
                user: {}
            }
        default: return state
    }
}

export default userReducer