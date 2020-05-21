import Api from '@/services/Api'

export default {
  index () {
    return Api().get('tests')
  },
  post (test) {
    return Api().post('tests', test)
  }
}
