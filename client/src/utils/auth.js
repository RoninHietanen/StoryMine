import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id');
  }

  login(idToken) {
    localStorage.setItem('id', idToken);

    window.location.assign('/profile/:id');
  }

  logout() {
    localStorage.removeItem('id');
    window.location.assign('/');
  }
}

export default new AuthService();
