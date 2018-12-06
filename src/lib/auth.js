export function getToken() {
  return localStorage.getItem('bags-token');
}

export function saveToken(token){
  localStorage.setItem('bags-token', token);
}


export function decodeToken() {
  const token = getToken();
  if(!token) return {};
  const decoded = JSON.parse(atob(token.split('.')[1]));
  return decoded;
}

export function deleteToken() {
  console.log('logout');
  localStorage.removeItem('bags-token');
}

export function isAuthenticated() {
  return !!getToken();
}
