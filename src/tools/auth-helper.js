const TOKEN = "token"
const USERNAME = "username"

export function setToken(token,user){
    localStorage.setItem(TOKEN,token)
    localStorage.setItem(USERNAME,user)
}
export function getUser(){
    return localStorage.getItem(USERNAME)
}