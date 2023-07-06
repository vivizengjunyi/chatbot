export const setLoginUserId = (userId) => {
    localStorage.setItem('loginUserId', userId)
}
export const getLoginUserId = () => {
    return localStorage.getItem('loginUserId')
}
export const getAccessToken = () => {
    return localStorage.getItem('accessToken')
}
export const setAccessToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken)
}
export const removeAccessToken = () => {
    localStorage.removeItem('accessToken')
}

export const removeLoginUserId = () => {
    return localStorage.removeItem('loginUserId')
}


export const setAsylumApplicationBundles = (asylumApplicationBundles) => {
    localStorage.setItem('asylumApplicationBundles', JSON.stringify(asylumApplicationBundles))
}
export const getAsylumApplicationBundles = () => {
    return JSON.parse(localStorage.getItem('asylumApplicationBundles') || '[]')
}

export const setChatStatus = (chatStatus) => {
    localStorage.setItem('chatStatus', JSON.stringify(chatStatus))
}
export const getChatStatus = () => {
    return JSON.parse(localStorage.getItem('chatStatus') || '{}')
}
