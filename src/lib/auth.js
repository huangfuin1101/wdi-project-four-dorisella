export function getToken() {
  return localStorage.getItem('wonders-token');
}

export function saveToken(token){
  localStorage.setItem('wonders-token', token);
}


export function decodeToken() {
  const token = getToken();
  if(!token) return {};
  const decoded = JSON.parse(atob(token.split('.')[1]));
  return decoded;
}

export function deleteToken() {
  localStorage.removeItem('wonders-token');
}

export function isAuthenticated() {
  return !!getToken();
}
