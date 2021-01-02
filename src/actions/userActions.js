// Action Creators

const setUser = (payload) => ({ type: "SET_USER", payload })

const createUser = (payload) => ({ type: "CREATE_USER", payload })

export const logUserOut = () => ({ type: "LOG_OUT" })

// Methods

export const fetchUser = (userInfo) => dispatch => {
    return fetch(`http://localhost:8000/api/signin`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    }).then(res => { return res.json() })
        .then(data => {
            if (data.error) {
                // console.log(data)
                alert(data.error);
            } else {
                // console.warn("action",data)
                // console.log("action",data)
                localStorage.setItem("token", data.token)
                // dispatch(setUser(data))
                dispatch(setUser(data.user))
            }
        }).catch(error => {
            console.log(error);
        })
}

export const signUserUp = (userInfo) => dispatch => {
    fetch(`http://localhost:8000/api/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                // console.log(data)
                alert(data.error);
            } else {
                localStorage.setItem("token", data.token)
                dispatch(createUser(data.user))
            }
        })
}

// export const autoLogin = (id) => dispatch => {
//     fetch(`http://localhost:8000/api/user/:id`, {
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorization": `Bearer ${localStorage.getItem("token")}`
//         }
//     })
//         .then(res => res.json())
//         .then(data => {
//             localStorage.setItem("token", data.token)
//             console.log(data)
//             dispatch(setUser(data.user))
//         })
// }

export const logout = () => (dispatch) => {
    return fetch(`http://localhost:8000/api/signout`, {
        method: 'GET',
    }).then(response => {
        alert(response);
        localStorage.removeItem('token');
        alert("Signout Successful", response)
        dispatch(logUserOut())
    })
        .catch(err => console.log(err));
}