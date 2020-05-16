import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)//post a requst to the regiter endpoint and then use credentials
    }
}

