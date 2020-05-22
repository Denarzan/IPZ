import Api from '@/services/Api'

export default {
  index () {
    return Api().get('tests')
  },
  show (testId) {
    return Api().get(`tests/${testId}`)
  },
  post (test) {
    return Api().post('tests', test)
  },
  put (test) {
    return Api().put(`tests/${test.id}`, test)
  }
}
