import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials) // post a requst to the regiter endpoint and then use credentials
  },
  login (credentials) {
    return Api().post('login', credentials) // post a requst to the login endpoint and then use credentials
  }
}
