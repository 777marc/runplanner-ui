const isAuthenticated = () => {
    let result = false;
    if (localStorage.getItem("user_info") !== null) {
        result = true;
    } 
    return result;
}

const Authenticate = data => {
    console.log(data)
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('user_info', JSON.stringify(data.user_info));
} 
 
const ClearAccessToken = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_info');
}

const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('user_info'));
}
  
module.exports = { 
    isAuthenticated,
    ClearAccessToken,
    Authenticate,
    getUserInfo
 }