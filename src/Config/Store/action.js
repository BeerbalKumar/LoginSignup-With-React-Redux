import FirebaseApp from './../Firebase/firebase'

function Signup(data) {
    console.log(data)
    return (dispatch) => {

        FirebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                console.log(res)
                 console.log(res.user)
                FirebaseApp.firestore().collection("users").doc(res.user.uid).set(data)
                    .then((res) => {
                        console.log(res)
                        dispatch({
                            type: "signupSucess",

                        })
                    })
                    .catch((err) => {
                        console.log(err)
                        dispatch({ type: "showSignupErr", payload: err.code });
                        setTimeout(() => { dispatch({ type: "hideSignupErr" }) }, 3000)
                    })
            })
            .catch((err) => {
                dispatch({ type: "showSignupErr", payload: "email or password invalid" });
                setTimeout(() => { dispatch({ type: "hideSignupErr" }) }, 3000)
            })
    }

}


export {
    Signup
}