export function login(user) {
    localStorage.setItem("tg_user", JSON.stringify(user))
}

export function loginCheck() {
    if(localStorage.tg_user && JSON.parse(localStorage.tg_user).token) return true;
    else return false
}

export function getUserInfo() {
    if(localStorage.tg_user) return JSON.parse(localStorage.tg_user)
}