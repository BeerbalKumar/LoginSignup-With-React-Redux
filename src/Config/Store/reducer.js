const ALL_STATE = {
    isRegister: false,
    isSigned: false,
    isLogin: false,
    SignupErr: false,
    snackBar: 'snackbar'

}
function reducer(state = ALL_STATE, action) {


    switch (action.type) {
        case "signupSucess":
            return { ...state }
            break;
        case "showSignupErr":
            state.SignupErr = action.payload
            state.snackBar = "show"
            return {
                ...state, snackBar: state.snackBar, SignupErr: state.SignupErr.concat()
            }
            break;
        case "hideSignupErr":
            state.SignupErr = ""
            state.snackBar = "snackBar"
            return {
                ...state, snackBar: state.snackBar, SignupErr: state.SignupErr.concat()
            }
            break;

        default: {
            return state
        }
    }
}

export default reducer