export function getToken() {
  return localStorage.getItem('bags-token');
}

export function saveToken(token){
  localStorage.setItem('bags-token', token);
}


export function decodeToken() {
  console.log('this is token', token);
  const token = getToken();
  if(!token) return {};
  const decoded = JSON.parse(atob(token.split('.')[1]));
  return decoded;
}

export function deleteToken() {
  localStorage.removeItem('bags-token');
}

export function isAuthenticated() {
  return !!getToken();
}

export function isAdmin(){
  return decodeToken().check;
}

// export function isAdmin(){
//   if(decodeToken().check) {
//     return decodeToken();
//   }
// }
