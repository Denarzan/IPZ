import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('tests', {
      params: {
        search: search
      }
    })
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
